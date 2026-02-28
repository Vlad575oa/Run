'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useCart } from './CartProvider'

export function CheckoutModal() {
    const { items, totalAmount, isCheckoutOpen, setIsCheckoutOpen, clearCart } = useCart()

    const [form, setForm] = useState({
        customerName: '',
        phone: '',
        email: '',
        deliveryType: 'PICKUP' as 'PICKUP' | 'DELIVERY',
        address: '',
        comment: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [orderResult, setOrderResult] = useState<{ success: boolean; orderNumber?: string; error?: string } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    items: items.map(i => ({
                        productId: i.productId,
                        size: i.size,
                        quantity: i.quantity,
                        price: i.price,
                    })),
                }),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                setOrderResult({ success: true, orderNumber: data.orderNumber })
                clearCart()
            } else {
                setOrderResult({ success: false, error: data.error || 'Произошла ошибка' })
            }
        } catch {
            setOrderResult({ success: false, error: 'Ошибка сети. Попробуйте ещё раз.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        setIsCheckoutOpen(false)
        setOrderResult(null)
        setForm({ customerName: '', phone: '', email: '', deliveryType: 'PICKUP', address: '', comment: '' })
    }

    return (
        <AnimatePresence>
            {isCheckoutOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                        onClick={handleClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-white rounded-2xl z-50 shadow-2xl overflow-y-auto max-h-[90vh]"
                    >
                        {/* Order Success */}
                        {orderResult?.success ? (
                            <div className="p-8 text-center">
                                <div className="size-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-green-600">check_circle</span>
                                </div>
                                <h2 className="text-2xl font-bold text-[#171511] mb-2">Заказ оформлен!</h2>
                                <p className="text-gray-500 mb-1">Номер заказа:</p>
                                <p className="text-xl font-bold text-primary mb-6">{orderResult.orderNumber}</p>
                                <p className="text-gray-500 text-sm mb-8">
                                    Мы свяжемся с вами в ближайшее время для подтверждения заказа.
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="w-full py-4 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all"
                                >
                                    Отлично!
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                    <h2 className="text-xl font-bold text-[#171511]">Оформление заказа</h2>
                                    <button onClick={handleClose} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#171511] mb-1.5">Имя *</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.customerName}
                                            onChange={e => setForm(f => ({ ...f, customerName: e.target.value }))}
                                            placeholder="Ваше имя"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#171511] mb-1.5">Телефон *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                                            placeholder="+7 (999) 123-45-67"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#171511] mb-1.5">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                        />
                                    </div>

                                    {/* Delivery Type */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#171511] mb-2">Способ получения</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setForm(f => ({ ...f, deliveryType: 'PICKUP' }))}
                                                className={`p-3 rounded-xl border-2 text-center transition-all ${form.deliveryType === 'PICKUP'
                                                        ? 'border-primary bg-primary/5 text-primary'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <span className="text-2xl block mb-1">🏃</span>
                                                <span className="text-sm font-semibold">Самовывоз</span>
                                                <span className="text-xs block text-gray-500">На пробежке</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setForm(f => ({ ...f, deliveryType: 'DELIVERY' }))}
                                                className={`p-3 rounded-xl border-2 text-center transition-all ${form.deliveryType === 'DELIVERY'
                                                        ? 'border-primary bg-primary/5 text-primary'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <span className="text-2xl block mb-1">📦</span>
                                                <span className="text-sm font-semibold">Доставка</span>
                                                <span className="text-xs block text-gray-500">По адресу</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Address (only for delivery) */}
                                    <AnimatePresence>
                                        {form.deliveryType === 'DELIVERY' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <label className="block text-sm font-semibold text-[#171511] mb-1.5">Адрес доставки *</label>
                                                <input
                                                    type="text"
                                                    required={form.deliveryType === 'DELIVERY'}
                                                    value={form.address}
                                                    onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                                                    placeholder="Город, улица, дом, квартира"
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Comment */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[#171511] mb-1.5">Комментарий</label>
                                        <textarea
                                            value={form.comment}
                                            onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                                            placeholder="Пожелания к заказу"
                                            rows={2}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                                        />
                                    </div>

                                    {/* Error */}
                                    {orderResult?.error && (
                                        <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                                            {orderResult.error}
                                        </div>
                                    )}

                                    {/* Summary & Submit */}
                                    <div className="pt-2 border-t border-gray-100 space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">К оплате:</span>
                                            <span className="text-2xl font-bold text-[#171511]">
                                                {(totalAmount / 100).toLocaleString('ru-RU')} ₽
                                            </span>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="animate-spin material-symbols-outlined text-lg">progress_activity</span>
                                                    Оформляем...
                                                </>
                                            ) : (
                                                <>
                                                    <span className="material-symbols-outlined text-lg">shopping_cart_checkout</span>
                                                    Оформить заказ
                                                </>
                                            )}
                                        </button>
                                        <p className="text-xs text-gray-400 text-center">
                                            Нажимая кнопку, вы соглашаетесь с{' '}
                                            <a href="/offer" className="text-primary hover:underline">публичной офертой</a>
                                        </p>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
