'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { useCart } from './CartProvider'

export function CartDrawer() {
    const { items, removeItem, updateQuantity, totalAmount, totalItems, isCartOpen, setIsCartOpen, setIsCheckoutOpen } = useCart()

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                        onClick={() => setIsCartOpen(false)}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-[#171511]">
                                Корзина
                                {totalItems > 0 && (
                                    <span className="ml-2 text-sm font-medium text-white bg-primary rounded-full px-2 py-0.5">
                                        {totalItems}
                                    </span>
                                )}
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                                    <span className="material-symbols-outlined text-6xl text-gray-300">shopping_cart</span>
                                    <p className="text-gray-400 text-lg">Корзина пуста</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        Перейти в каталог
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    {items.map((item) => (
                                        <div key={`${item.productId}-${item.size}`} className="flex gap-4 p-3 rounded-xl bg-gray-50">
                                            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-[#171511] text-sm truncate">{item.name}</h3>
                                                <p className="text-xs text-gray-500 mt-0.5">Размер: {item.size}</p>
                                                <p className="text-primary font-bold text-sm mt-1">
                                                    {(item.price / 100).toLocaleString('ru-RU')} ₽
                                                </p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                                                        className="size-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-100"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                                                        className="size-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-100"
                                                    >
                                                        +
                                                    </button>
                                                    <button
                                                        onClick={() => removeItem(item.productId, item.size)}
                                                        className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-gray-100 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">Итого:</span>
                                    <span className="text-2xl font-bold text-[#171511]">
                                        {(totalAmount / 100).toLocaleString('ru-RU')} ₽
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        setIsCartOpen(false)
                                        setIsCheckoutOpen(true)
                                    }}
                                    className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
                                >
                                    Оформить заказ
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
