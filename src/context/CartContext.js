import React, { createContext, useState } from "react";

// Create a Context for the Cart
export const CartContext = createContext();

// Create a Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to the cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevCartItems) => {
      const existingProductIndex = prevCartItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        // If product already exists, update its quantity
        const updatedCart = [...prevCartItems];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new product to cart
        return [...prevCartItems, { ...product, quantity }];
      }
    });
  };

  // Provide the context value
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
