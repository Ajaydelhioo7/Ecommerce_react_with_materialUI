import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductDetails from "../components/product/ProductDetails";
import CategoryPage from "../pages/CategoryPage";
import LoginPage from "../pages/LoginPage";
import AccountSettingsPage from "../pages/AccountSettingsPage";
import CheckoutPage from "../pages/CheckoutPage";
import AllProductsPage from "../pages/AllProductsPage"; // Correct naming here

const AppRoutes = ({
  handleAddToCart, // Function to add products to the cart
  setIsLoggedIn, // Function to manage login state
  cartItems, // Cart items state
  handleCartToggle, // Toggle cart drawer
  updateCartQuantity, // Update quantity of cart items
  removeCartItem, // Remove item from cart
  handleCheckout, // Checkout process function
  isCartOpen, // State to check if cart is open
  isLoggedIn, // State to check if user is logged in
}) => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route
      path="/course/:id"
      element={<ProductDetails onAddToCart={handleAddToCart} />} // Pass add to cart to product details
    />
    <Route
      path="/categories"
      element={<CategoryPage onAddToCart={handleAddToCart} />} // Pass add to cart to category page
    />
    <Route
      path="/login"
      element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} // Pass login state function
    />
    <Route path="/account" element={<AccountSettingsPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route
      path="/products"
      element={<AllProductsPage onAddToCart={handleAddToCart} />} // Pass add to cart to AllProductsPage
    />
  </Routes>
);

export default AppRoutes;
