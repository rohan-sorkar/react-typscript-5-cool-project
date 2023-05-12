import { createContext } from "react";
import { Product } from "../types";

interface ShoppingCartContext {
    addToCart: (product: Product) => void
    addToWishList: (product: Product) => void
    increaseQuantity: (productId: string) => void
    decreaseQuantity: (productId: string) => void
    removeItemFromCart: (productId: string) => void
    clearShoppingCart: () => void
    cartItems: Product[] | undefined
    wishlistItems: Product[] | undefined
    total: number
    subtotal: number
    shipping: number
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);