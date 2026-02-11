'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function YandexMetrika() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        // @ts-ignore
        const ym = window.ym
        if (typeof ym !== 'undefined') {
            const url = window.location.href
            //   ym(106505426, 'hit', url)
        }
    }, [pathname, searchParams])

    return (
        <>
            <Script id="yandex-metrika" strategy="lazyOnload">
                {`
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106505426', 'ym');

        ym(106505426, 'init', {
            ssr: true,
            webvisor:true,
            clickmap:true,
            ecommerce:"dataLayer",
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce:true,
            trackLinks:true
        });
      `}
            </Script>
            <noscript>
                <div>
                    <img
                        src="https://mc.yandex.ru/watch/106505426"
                        style={{ position: 'absolute', left: '-9999px' }}
                        alt=""
                    />
                </div>
            </noscript>
        </>
    )
}
