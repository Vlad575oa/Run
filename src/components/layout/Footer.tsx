import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'


const footerLinks = {
    navigation: [
        { label: 'Медиа', href: '/media' },
        // { label: 'Мероприятия', href: '/events' },
        { label: 'Результаты', href: '/results' },
        { label: 'Блог', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
    ],
    cities: [
        { label: 'Симферополь', href: SITE_CONFIG.socials.simferopol.telegram },
        { label: 'Ялта', href: SITE_CONFIG.socials.yalta.telegram },

    ],
    legal: [
        { label: 'Политика конфиденциальности', href: '/privacy' },
        { label: 'Пользовательское соглашение', href: '/terms' },
    ],
}

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-[#0F1117] text-gray-300 overflow-hidden">

            <Container className="relative z-10 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* ... rest of content matches original, just wrapped in Container with z-10 ... */}
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src="/logo.svg"
                                    alt="Logo"
                                    fill
                                    loading="lazy"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-white leading-none">
                                    КофеРан
                                </span>
                                <span className="text-gray-400 text-xs font-normal mt-0.5">
                                    беговой клуб в Симферополе
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6">
                            {SITE_CONFIG.description}
                        </p>
                        {/* Social Links */}
                        <div className="flex flex-col gap-4">
                            {/* Simferopol */}
                            <div>
                                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Симферополь</h4>
                                <div className="flex gap-4">
                                    <a
                                        href={SITE_CONFIG.socials.simferopol.telegram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="Telegram Симферополь"
                                        title="Telegram Симферополь"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={SITE_CONFIG.socials.simferopol.vk}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="VK Симферополь"
                                        title="VK Симферополь"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.688 0H1.312C0.589 0 0 0.589 0 1.312V22.688C0 23.411 0.589 24 1.312 24H22.688C23.411 24 24 23.411 24 22.688V1.312C24 0.589 23.411 0 22.688 0ZM15.176 19.344C8.928 19.344 5.352 15.024 5.352 9.792H8.496C8.496 13.68 10.224 15.312 11.616 15.696V9.792H14.568V13.152C16.368 12.96 18.264 10.92 18.912 9.792H21.72C21.264 12.192 19.464 13.968 18.192 14.688C19.464 15.288 21.48 16.896 22.248 19.344H18.984C18.384 17.52 16.896 15.696 14.568 15.456V19.344H15.176Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Yalta */}
                            <div>
                                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Ялта</h4>
                                <div className="flex gap-4">
                                    <a
                                        href={SITE_CONFIG.socials.yalta.telegram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="Telegram Ялта"
                                        title="Telegram Ялта"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Навигация</h3>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        prefetch={false}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cities */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Города</h3>
                        <ul className="space-y-3">
                            {footerLinks.cities.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/cities"
                                    prefetch={false}
                                    className="text-orange-400 hover:text-orange-300 transition-colors"
                                >
                                    Все города →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Контакты</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={SITE_CONFIG.telegram.mainGroup}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Telegram сообщество
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://t.me/elizavetaa0911"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors flex flex-col"
                                >
                                    <span className="text-xs text-gray-500 uppercase">Регистрация Симферополь</span>
                                    <span>@elizavetaa0911</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://t.me/VictoriaPuhova"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors flex flex-col"
                                >
                                    <span className="text-xs text-gray-500 uppercase">Регистрация Ялта</span>
                                    <span>@VictoriaPuhova</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} {SITE_CONFIG.name}. Все права защищены.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex gap-6">
                                {footerLinks.legal.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Developer Credit */}
                            <a
                                href="https://t.me/Vlad557"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 group"
                                aria-label="Разработчик сайта"
                            >
                                <span className="text-gray-600 text-xs group-hover:text-gray-400 transition-colors">
                                    сайт разработан
                                </span>
                                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-700 group-hover:border-gray-500 transition-colors">
                                    <Image
                                        src="/Logo_Vlad.webp"
                                        alt="Vlad Logo"
                                        fill
                                        loading="lazy"
                                        className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
