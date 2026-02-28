'use client'

import { CartProvider } from '@/components/features/shop/CartProvider'
import { CartDrawer } from '@/components/features/shop/CartDrawer'
import { CheckoutModal } from '@/components/features/shop/CheckoutModal'

export function ShopProviders({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            {children}
            <CartDrawer />
            <CheckoutModal />
        </CartProvider>
    )
}
