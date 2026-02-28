'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export interface CartItem {
    productId: number
    name: string
    price: number       // в копейках
    image: string
    size: string
    quantity: number
}

interface CartContextType {
    items: CartItem[]
    addItem: (item: Omit<CartItem, 'quantity'>) => void
    removeItem: (productId: number, size: string) => void
    updateQuantity: (productId: number, size: string, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalAmount: number
    isCartOpen: boolean
    setIsCartOpen: (open: boolean) => void
    isCheckoutOpen: boolean
    setIsCheckoutOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart must be used within CartProvider')
    return context
}

const CART_KEY = 'coffeerun_cart'

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Загружаем корзину из localStorage
    useEffect(() => {
        try {
            const saved = localStorage.getItem(CART_KEY)
            if (saved) setItems(JSON.parse(saved))
        } catch { }
        setMounted(true)
    }, [])

    // Сохраняем в localStorage
    useEffect(() => {
        if (mounted) {
            localStorage.setItem(CART_KEY, JSON.stringify(items))
        }
    }, [items, mounted])

    const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
        setItems(prev => {
            const existing = prev.find(i => i.productId === item.productId && i.size === item.size)
            if (existing) {
                return prev.map(i =>
                    i.productId === item.productId && i.size === item.size
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            }
            return [...prev, { ...item, quantity: 1 }]
        })
        setIsCartOpen(true)
    }, [])

    const removeItem = useCallback((productId: number, size: string) => {
        setItems(prev => prev.filter(i => !(i.productId === productId && i.size === size)))
    }, [])

    const updateQuantity = useCallback((productId: number, size: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(productId, size)
            return
        }
        setItems(prev =>
            prev.map(i =>
                i.productId === productId && i.size === size ? { ...i, quantity } : i
            )
        )
    }, [removeItem])

    const clearCart = useCallback(() => {
        setItems([])
        setIsCartOpen(false)
        setIsCheckoutOpen(false)
    }, [])

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
    const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

    return (
        <CartContext.Provider value={{
            items, addItem, removeItem, updateQuantity, clearCart,
            totalItems, totalAmount,
            isCartOpen, setIsCartOpen,
            isCheckoutOpen, setIsCheckoutOpen,
        }}>
            {children}
        </CartContext.Provider>
    )
}
