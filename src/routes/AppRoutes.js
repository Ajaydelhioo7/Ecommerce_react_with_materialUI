import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductDetails from "../product/ProductDetails";
import CategoryPage from "../pages/CategoryPage";
import LoginPage from "../pages/LoginPage";
import AccountSettingsPage from "../pages/AccountSettingsPage";
import CheckoutPage from "../pages/CheckoutPage";

const AppRoutes = ({
  handleAddToCart,
  setIsLoggedIn,
  cartItems,
  handleCartToggle,
  updateCartQuantity,
  removeCartItem,
  handleCheckout,
  isCartOpen,
  isLoggedIn,
}) => (
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
);

export default AppRoutes;
