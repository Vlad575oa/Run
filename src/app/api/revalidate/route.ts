import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Sanity webhook secret for verification
const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
    try {
        // Verify webhook secret
        const secret = req.headers.get('x-sanity-webhook-secret')
        if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
            return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
        }

        const body = await req.json()
        const { _type, slug } = body

        console.log(`[Revalidate] Received webhook for ${_type}: ${slug?.current || 'unknown'}`)

        switch (_type) {
            case 'event':
                revalidatePath('/events', 'page')
                revalidatePath('/calendar', 'page')
                if (slug?.current) {
                    revalidatePath(`/events/${slug.current}`, 'page')
                }
                break

            case 'city':
                revalidatePath('/cities', 'page')
                revalidatePath('/', 'page')
                if (slug?.current) {
                    revalidatePath(`/cities/${slug.current}`, 'page')
                }
                break

            case 'article':
                revalidatePath('/blog', 'page')
                if (slug?.current) {
                    revalidatePath(`/blog/${slug.current}`, 'page')
                }
                break

            case 'siteSettings':
                revalidatePath('/', 'layout')
                break

            default:
                console.log(`[Revalidate] Unknown type: ${_type}`)
        }

        return NextResponse.json({
            revalidated: true,
            type: _type,
            slug: slug?.current,
            timestamp: new Date().toISOString(),
        })
    } catch (error) {
        console.error('[Revalidate] Error:', error)
        return NextResponse.json(
            { error: 'Failed to revalidate', details: String(error) },
            { status: 500 }
        )
    }
}

// Health check
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Revalidation endpoint ready',
    })
}
