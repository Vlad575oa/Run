import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = new URL(request.url)
    const origin = url.origin
    const pathname = url.pathname
    const requestHeaders = new Headers(request.headers)

    // Set x-pathname header for server components to know the current path
    requestHeaders.set('x-pathname', pathname)
    requestHeaders.set('x-url', request.url)
    requestHeaders.set('x-origin', origin)

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
