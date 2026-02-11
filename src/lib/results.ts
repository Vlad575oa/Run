import { Result, ResultsStats } from '@/entities'

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTy9aDdxb3uZcnyofVxJEJmfQAJ8t4dn9MgBm_X7xysqWiqjkklraQ9D9i-1hkUosgxqpAwjQtkRqBn/pub?output=csv'

export async function fetchRaceResults(): Promise<Result[]> {
    try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch Google Sheet: ${response.statusText}`)
        }

        const csvText = await response.text()
        return parseCSV(csvText)
    } catch (error) {
        console.error('Error fetching race results:', error)
        return []
    }
}

function parseCSV(csvText: string): Result[] {
    const lines = csvText.split(/\r?\n/)
    if (lines.length < 2) return []

    const header = lines[0].split(',')
    const results: Result[] = []

    // Helper to handle commas within quotes if necessary
    // Simple split for now, assuming standard CSV from Google
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]
        if (!line.trim()) continue

        const values = parseCSVLine(line)
        if (values.length < 9) continue

        const [id, name, age, distance, time, pace, date, event, is_pb] = values

        results.push({
            id: id.trim(),
            name: name.trim(),
            age: parseInt(age.trim(), 10) || 0,
            distance: distance.trim(),
            time: time.trim(),
            pace: pace.trim(),
            date: date.trim(),
            event: event.trim(),
            is_pb: is_pb.trim().toLowerCase() === 'true' || is_pb.trim() === '1',
            // Default fields for now
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name.trim())}&background=f4f2f0&color=e38d31`,
            city: 'Симферополь' // Default city if not in CSV, update logic if city is added to Sheet
        })
    }

    return results
}

function parseCSVLine(line: string): string[] {
    const result: string[] = []
    let current = ''
    let inQuotes = false

    for (let i = 0; i < line.length; i++) {
        const char = line[i]
        if (char === '"' && line[i + 1] === '"') {
            current += '"'
            i++
        } else if (char === '"') {
            inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
            result.push(current)
            current = ''
        } else {
            current += char
        }
    }
    result.push(current)
    return result
}

export function calculateResultsStats(results: Result[]): ResultsStats {
    // This is simplified. In a real scenario, you'd compare dates to calculate "this week"
    const totalDistance = results.reduce((acc, r) => {
        const dist = parseFloat(r.distance.replace(' км', '').replace(',', '.'))
        return acc + (isNaN(dist) ? 0 : dist)
    }, 0)

    const totalPBs = results.filter(r => r.is_pb).length

    return {
        totalFinishers: results.length,
        totalDistance: Math.round(totalDistance),
        totalPBs: totalPBs,
        weeklyFinishers: Math.round(results.length * 0.15), // Mock weekly data
        weeklyDistance: Math.round(totalDistance * 0.1),
        weeklyPBs: Math.round(totalPBs * 0.2)
    }
}

export function calculateCommunityRatings(results: import('@/entities').Result[]): import('@/entities').RatingAthlete[] {
    const athleteMap: Record<string, import('@/entities').RatingAthlete> = {}

    results.forEach(result => {
        if (!athleteMap[result.name]) {
            athleteMap[result.name] = {
                name: result.name,
                age: result.age,
                ageCategory: getAgeCategory(result.age),
                bestTimes: {},
                avatar: result.avatar,
                resultsCount: 0
            }
        }

        const athlete = athleteMap[result.name]
        athlete.resultsCount++

        const distance = result.distance
        const time = result.time

        if (!athlete.bestTimes[distance] || compareTimes(time, athlete.bestTimes[distance]) < 0) {
            athlete.bestTimes[distance] = time
        }
    })

    return Object.values(athleteMap)
}

function getAgeCategory(age: number): string {
    if (age < 18) return 'Under 18'
    if (age <= 29) return '18-29'
    if (age <= 39) return '30-39'
    return '40+'
}

function compareTimes(time1: string, time2: string): number {
    return timeToSeconds(time1) - timeToSeconds(time2)
}

function timeToSeconds(time: string): number {
    if (!time) return 999999
    const parts = time.split(':').map(Number)
    let seconds = 0
    if (parts.length === 3) {
        seconds = (parts[0] || 0) * 3600 + (parts[1] || 0) * 60 + (parts[2] || 0)
    } else if (parts.length === 2) {
        seconds = (parts[0] || 0) * 60 + (parts[1] || 0)
    }
    return seconds || 999999
}
