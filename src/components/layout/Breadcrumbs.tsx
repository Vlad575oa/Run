import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo'

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Always include home
    const allItems = [{ label: 'Главная', href: '/' }, ...items]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema(
                            allItems.map((item) => ({ name: item.label, url: item.href }))
                        )
                    ),
                }}
            />
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center flex-wrap gap-2 text-sm">
                    {allItems.map((item, index) => {
                        const isLast = index === allItems.length - 1

                        return (
                            <li key={item.href} className="flex items-center">
                                {index > 0 && (
                                    <svg
                                        className="w-4 h-4 text-gray-400 mx-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                )}
                                {isLast ? (
                                    <span className="text-gray-500" aria-current="page">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-orange-600 hover:text-orange-700 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </>
    )
}
