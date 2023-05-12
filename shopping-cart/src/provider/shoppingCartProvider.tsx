import { ShoppingCartContext } from "../context/shoppingCartContext";
import useShoppingCart from "../hooks/useShoppingCart";

interface PropTypes {
  children: React.ReactNode;
}

const ShoppingCartProvider = ({ children }: PropTypes) => {
    const {cartItems, wishlistItems, addToCart, addToWishList,
    increaseQuantity, decreaseQuantity, removeItemFromCart,
    total, subtotal, shipping, clearShoppingCart} = useShoppingCart();


  return (
    <ShoppingCartContext.Provider
      value={{
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
        shipping,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
