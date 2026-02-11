import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generatePageMetadata } from '@/lib/seo'
import { TextReveal } from '@/components/ui/TextReveal'

export const metadata: Metadata = generatePageMetadata({
    title: 'Магазин мерча',
    description: 'Наш мерч — для тех, кто любит бег и уют. Вступай в комьюнити в правильной экипировке.',
    path: '/shop',
})

const products = [
    {
        id: 1,
        name: 'Худи КофеРан',
        price: '2990 ₽',
        image: '/images/shop-item.webp',
        desc: 'Мягкий футер, свободный крой. Идеально для восстановления после бега.',
        badge: 'Bestseller',
        badgeColor: 'bg-primary'
    },
    {
        id: 2,
        name: 'Худи КофеРан',
        price: '2990 ₽',
        image: '/images/shop-item.webp',
        desc: 'Технологичная ткань, отводит влагу. Стильный принт с кофейным зерном.',
    },
    {
        id: 3,
        name: 'Худи КофеРан',
        price: '2990 ₽',
        image: '/images/shop-item.webp',
        desc: 'Дышащая сетка, регулируемая застежка. Защита от солнца в стиле CRP.',
    },
    {
        id: 4,
        name: 'Худи КофеРан',
        price: '2990 ₽',
        image: '/images/shop-item.webp',
        desc: 'Экстра-мягкий хлопок. Твой лучший друг после зимней пробежки.',
    },
    {
        id: 5,
        name: 'Худи КофеРан',
        price: '2990 ₽',
        image: '/images/shop-item.webp',
        desc: 'Профессиональный крой, светоотражающие детали для твоей безопасности.',
    },
    {
        id: 6,
        name: 'Худи КофеРан',
        price: '2990 ₽',
        image: '/images/shop-item.webp',
        desc: '750мл, держит температуру. Экологично и практично.',
    },
    {
        id: 7,
        name: 'Худи КофеРан',
        price: '2990 ₽',
        image: '/images/shop-item.webp',
        desc: 'Компрессия и поддержка стопы. Стильный кофейный градиент.',
    },
    {
        id: 8,
        name: 'Худи КофеРан',
        price: '2990 ₽',
        image: '/images/shop-item.webp',
        desc: 'Многоразовая кружка для твоего любимого фильтр-кофе после финиша.',
    }
]

export default function ShopPage() {
    return (
        <div className="flex flex-1 flex-col items-center bg-background-light text-[#171511] w-full relative">
            <div className="layout-content-container flex flex-col max-w-[1440px] w-full flex-1 px-4 md:px-10 py-8">
                {/* Hero Section */}
                <div className="w-full mb-10">
                    <div
                        className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-xl items-center justify-center p-8 text-center relative overflow-hidden"
                        style={{
                            backgroundImage: `linear-gradient(rgba(33, 25, 17, 0.6), rgba(33, 25, 17, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmit9sRG35JI60Pdoay3JrWaghJsG2OAeObGD8uQOheJIdcai3qJcQPNC3dEDh-5mcngoisJsJlIouaT5G29bZmOJQ2ON55HUgWUQjCxb8t3A5viWUpE6wrYYi2t1KOFWZ7ciDMinfjkGCI7dSp0CnoHZvafLvW8SUPHs-w9x-qTbmkUnl-w0QKtN4qGsPsqNzCP0JqR2UE-trls8XF6xFkJtqWnWUgKL08xZMZdAOTLTM9pRhpw9uhrHg3Eh4ROwaN6bnzydnLRcv")`
                        }}
                    >
                        <div className="flex flex-col gap-4 max-w-2xl z-10">
                            <TextReveal
                                text="Наш мерч — для тех, кто любит бег и уют"
                                className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight justify-center"
                            />
                            <p className="text-white/90 text-base md:text-lg font-light leading-relaxed">
                                Вступай в наше комьюнити в правильной экипировке. От утренних пробежек до вечерних посиделок за кофе.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Section */}
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex gap-3 flex-wrap items-center">
                        <span className="text-sm font-semibold mr-2 opacity-60">Категории:</span>
                        <button className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-sm transition-all">
                            <p className="text-sm font-bold">Все</p>
                        </button>
                        <button className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white border border-[#f4f2f0] px-5 hover:border-primary transition-all">
                            <p className="text-sm font-medium">Худи</p>
                        </button>
                        <button className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white border border-[#f4f2f0] px-5 hover:border-primary transition-all">
                            <p className="text-sm font-medium">Футболки</p>
                        </button>
                        <button className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white border border-[#f4f2f0] px-5 hover:border-primary transition-all">
                            <p className="text-sm font-medium">Аксессуары</p>
                        </button>
                    </div>
                    <div className="flex gap-3 flex-wrap items-center">
                        <span className="text-sm font-semibold mr-2 opacity-60">Фильтры:</span>
                        <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#f4f2f0] px-4">
                            <p className="text-xs font-medium">Размер</p>
                            <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                        </button>
                        <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#f4f2f0] px-4">
                            <p className="text-xs font-medium">Цвет</p>
                            <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                        </button>
                        <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#f4f2f0] px-4">
                            <p className="text-xs font-medium">Цена</p>
                            <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
                    {products.map((product) => (
                        <div key={product.id} className="group flex flex-col gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {product.badge && (
                                    <div className={`absolute top-3 left-3 ${product.badgeColor || 'bg-primary'} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider`}>
                                        {product.badge}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-[#171511] text-lg font-bold leading-tight">{product.name}</h3>
                                    <span className="text-primary font-bold text-lg">{product.price}</span>
                                </div>
                                <p className="text-[#877664] text-sm line-clamp-2">{product.desc}</p>
                                <button className="mt-2 w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-md shadow-primary/20">
                                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                    Купить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Cart FAB */}
            <button className="fixed bottom-8 right-8 size-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40 active:scale-95 group">
                <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">shopping_cart</span>
                <span className="absolute -top-1 -right-1 size-6 bg-[#171511] border-2 border-white text-white text-xs flex items-center justify-center rounded-full font-bold">0</span>
            </button>
        </div>
    )
}
