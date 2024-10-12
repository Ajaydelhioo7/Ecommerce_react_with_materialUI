import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart from localStorage, or start with an empty array if none exists
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false); // Track whether the cart drawer is open

  // Save the cartItems to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Handle adding products to the cart (for both CategoryPage and ProductDetails)
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
    setIsCartOpen(true); // Automatically open the cart drawer when an item is added
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

  // Open/close the cart drawer
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Header cartItems={cartItems} onCartClick={handleCartToggle} />
      <CartDrawer
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={handleCartToggle}
        updateCartQuantity={updateCartQuantity}
        removeCartItem={removeCartItem} // Pass removeCartItem function to CartDrawer
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/course/:id"
          element={<ProductDetails onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/categories"
          element={<CategoryPage onAddToCart={handleAddToCart} />} // Pass handleAddToCart to CategoryPage
        />
      </Routes>
    </Router>
  );
}

export default App;
