'use client'

import { useState } from 'react'
import { useCart } from '@/components/features/shop/CartProvider'

interface Props {
    productId: number
    name: string
    price: number
    image: string
    sizes: string[]
}

export function ShopClientSection({ productId, name, price, image, sizes }: Props) {
    const { addItem } = useCart()
    const [selectedSize, setSelectedSize] = useState(sizes[1] || sizes[0]) // default M or first
    const [added, setAdded] = useState(false)

    const handleAdd = () => {
        addItem({ productId, name, price, image, size: selectedSize })
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
    }

    return (
        <div className="flex flex-col gap-4 mt-auto">
            {/* Size Selector */}
            <div>
                <p className="text-sm font-semibold text-[#171511] mb-2">Размер</p>
                <div className="flex gap-2">
                    {sizes.map(size => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-12 h-12 rounded-xl font-bold text-sm transition-all ${selectedSize === size
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-gray-100 text-[#171511] hover:bg-gray-200'
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Add to Cart Button */}
            <button
                onClick={handleAdd}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-lg transition-all active:scale-[0.97] shadow-md ${added
                        ? 'bg-green-500 text-white shadow-green-500/20'
                        : 'bg-primary text-white shadow-primary/20 hover:bg-opacity-90'
                    }`}
            >
                <span className="material-symbols-outlined text-lg">
                    {added ? 'check' : 'add_shopping_cart'}
                </span>
                {added ? 'Добавлено!' : 'В корзину'}
            </button>
        </div>
    )
}
