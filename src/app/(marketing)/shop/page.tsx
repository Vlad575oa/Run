import { Metadata } from 'next'
import Image from 'next/image'
import { generatePageMetadata } from '@/lib/seo'
import { TextReveal } from '@/components/ui/TextReveal'
import { ShopClientSection } from './ShopClient'

export const metadata: Metadata = generatePageMetadata({
    title: 'Магазин мерча',
    description: 'Наш мерч — для тех, кто любит бег и уют. Вступай в комьюнити в правильной экипировке.',
    path: '/shop',
})

const products = [
    {
        id: 1,
        name: 'Худи КофеРан (Черный)',
        price: 299000,
        priceDisplay: '2 990 ₽',
        image: '/images/hoodie-black.png',
        description: 'Мягкий футер, свободный крой. Исполнение в классическом черном цвете. Состав: 80% хлопок, 20% полиэстер.',
        badge: 'NEW',
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 2,
        name: 'Футболка КофеРан (Белая)',
        price: 99000,
        priceDisplay: '990 ₽',
        image: '/images/tshirt-white.jpg',
        description: 'Легкая хлопковая футболка. Идеально для бега в теплую погоду или прогулок. 100% хлопок.',
        badge: 'Best Price',
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 3,
        name: 'Футболка КофеРан (Черная)',
        price: 99000,
        priceDisplay: '990 ₽',
        image: '/images/tshirt-black.jpg',
        description: 'Стильная черная футболка с фирменным принтом. Дышащий материал, комфортная посадка.',
        badge: 'Best Price',
        sizes: ['S', 'M', 'L', 'XL'],
    },
]

export default function ShopPage() {
    return (
        <div className="flex flex-1 flex-col items-center bg-background-light text-[#171511] w-full relative">
            <div className="layout-content-container flex flex-col max-w-[1440px] w-full flex-1 px-4 md:px-10 py-8">
                {/* Hero Section */}
                <div className="w-full mb-10">
                    <div
                        className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center relative overflow-hidden"
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

                {/* Product Section */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">Наша коллекция</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="group flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-xl aspect-[3/4] md:w-80 shrink-0">
                                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {product.badge && (
                                        <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {product.badge}
                                        </div>
                                    )}
                                </div>

                                {/* Details */}
                                <div className="flex flex-col gap-3 flex-1">
                                    <h3 className="text-[#171511] text-2xl font-bold leading-tight">{product.name}</h3>
                                    <p className="text-primary font-bold text-3xl">{product.priceDisplay}</p>
                                    <p className="text-[#877664] text-sm leading-relaxed">{product.description}</p>

                                    {/* Size Selector + Add to Cart — client component */}
                                    <ShopClientSection
                                        productId={product.id}
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                        sizes={product.sizes}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
