export interface Result {
    id: string
    name: string
    age: number
    distance: string
    time: string
    pace: string
    date: string
    event: string
    is_pb: boolean
    city?: string
    avatar?: string
}

export interface RatingAthlete {
    name: string
    age: number
    ageCategory: string
    bestTimes: { [distance: string]: string }
    avatar?: string
    resultsCount: number
}

export interface ResultsStats {
    totalFinishers: number
    totalDistance: number
    totalPBs: number
    weeklyFinishers: number
    weeklyDistance: number
    weeklyPBs: number
}
