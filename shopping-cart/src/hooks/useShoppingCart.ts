import { useState } from "react";
import { Product } from "../types";


const useShoppingCart = () => {
    const [cartItems, setCartItems] = useState<Product[]>();
    const [wishlistItems, setWishlistItems] = useState<Product[]>();
  
    const addToCart = (product: Product) => {
      const isItemExits = cartItems?.some((item) => item.id === product.id);
      if (isItemExits) return;
      setCartItems((prev) => (prev ? [product, ...prev] : [product]));
    };
    const addToWishList = (product: Product) => {
      const isItemExits = wishlistItems?.some((item) => item.id === product.id);
      if (isItemExits) return;
      setWishlistItems((prev) => (prev ? [product, ...prev] : [product]));
    };
    const increaseQuantity = (productId: string) => {
      const updateProduct = cartItems?.find((item) => item.id === productId);
      if (updateProduct == null) return;
      updateProduct.quantity++;
      setCartItems((prev) => prev && [...prev]);
    };
    const decreaseQuantity = (productId: string) => {
      const updateProduct = cartItems?.find((item) => item.id === productId);
      if (updateProduct == null) return;
      if (updateProduct.quantity > 1) updateProduct.quantity--;
      setCartItems((prev) => prev && [...prev]);
    };
    const removeItemFromCart = (productId: string) => {
      const filteredProducts = cartItems?.filter((item) => item.id !== productId);
      setCartItems(filteredProducts);
    };
    const clearShoppingCart = () => {
      setCartItems([]);
    }
  
    const cartCalculations = () => {
      const tax = 2;
      const shipping = 4;
  
      const subtotal = cartItems
        ? cartItems?.reduce((acc, cur) => {
            acc = acc + cur.price * cur.quantity;
            return acc;
          }, 0)
        : 0;
  
      const total = subtotal ? subtotal + tax + shipping : 0;
  
      return {
        total,
        subtotal,
        shipping,
      };
    };
  
    const { total, subtotal, shipping } = cartCalculations();

    return {
        cartItems,
        wishlistItems,
        addToCart, 
        addToWishList,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
        clearShoppingCart,
        total, 
        subtotal, 
        shipping
    }
}

export default useShoppingCart;