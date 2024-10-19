import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CartDrawer from "./components/cart/CartDrawer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppRoutes from "./routes/AppRoutes"; // Import the new routes file
import {
  addToCart,
  updateCartQuantity,
  removeCartItem,
} from "./utils/cartUtils"; // Cart utility functions

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false); // Track cart drawer state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Save cartItems to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Handle adding products to the cart
  const handleAddToCart = (product, quantity = 1) => {
    const updatedCart = addToCart(cartItems, product, quantity); // Use utility to update cart
    setCartItems(updatedCart);
    setIsCartOpen(true); // Open cart drawer when an item is added
  };

  // Toggle cart drawer
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Handle the checkout button click
  const handleCheckout = () => {
    if (!isLoggedIn) {
      // If user is not logged in, redirect to login page
      window.location.href = "/login";
    } else {
      // If logged in, go to the checkout page
      window.location.href = "/checkout";
    }
  };

  return (
    <CartProvider>
      <Router>
        <Header cartItems={cartItems} onCartClick={handleCartToggle} />

        <CartDrawer
          cartItems={cartItems}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
          updateCartQuantity={
            (id, qty) => setCartItems(updateCartQuantity(cartItems, id, qty)) // Update quantity using utility
          }
          removeCartItem={
            (id) => setCartItems(removeCartItem(cartItems, id)) // Remove item using utility
          }
          onCheckout={handleCheckout}
        />

        <AppRoutes
          handleAddToCart={handleAddToCart} // Pass addToCart function to routes
          setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn to routes
          isLoggedIn={isLoggedIn} // Pass isLoggedIn state to routes
        />

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
