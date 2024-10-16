import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import Header from "./components/common/Header";
import CartDrawer from "./components/CartDrawer";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import CheckoutPage from "./pages/CheckoutPage"; // Import CheckoutPage

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
    const updatedCart = [...cartItems];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCartItems(updatedCart);
    setIsCartOpen(true); // Open cart drawer when an item is added
  };

  // Handle updating the quantity of a product in the cart
  const updateCartQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Handle removing an item from the cart
  const removeCartItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
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
    <Router>
      <Header cartItems={cartItems} onCartClick={handleCartToggle} />
      <CartDrawer
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={handleCartToggle}
        updateCartQuantity={updateCartQuantity}
        removeCartItem={removeCartItem}
        onCheckout={handleCheckout} // Pass the handleCheckout to CartDrawer
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/course/:id"
          element={<ProductDetails onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/categories"
          element={<CategoryPage onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/account" element={<AccountSettingsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
