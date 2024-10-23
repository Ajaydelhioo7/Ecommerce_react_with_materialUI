import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductDetails from "../components/product/ProductDetails";
import LoginPage from "../pages/LoginPage";
import AccountSettingsPage from "../pages/AccountSettingsPage";
import CheckoutPage from "../pages/CheckoutPage";
import AllProductsPage from "../pages/AllProductsPage";
import ViewCartPage from "../pages/ViewCartPage";
const AppRoutes = ({
  handleAddToCart,
  setIsLoggedIn,
  cartItems,
  updateCartQuantity,
  removeCartItem,
  handleCheckout,
  isLoggedIn,
}) => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route
      path="/course/:id"
      element={<ProductDetails onAddToCart={handleAddToCart} />}
    />
    <Route
      path="/products"
      element={<AllProductsPage onAddToCart={handleAddToCart} />}
    />
    <Route
      path="/login"
      element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
    />
    <Route path="/account" element={<AccountSettingsPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route
      path="/view-cart"
      element={
        <ViewCartPage
          cartItems={cartItems}
          updateCartQuantity={updateCartQuantity}
          removeCartItem={removeCartItem}
        />
      }
    />
  </Routes>
);

export default AppRoutes;
