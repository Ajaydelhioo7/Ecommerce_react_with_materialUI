import React from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link to navigate to View Cart page
import "./CartDrawer.css";

const CartDrawer = ({
  cartItems,
  isOpen,
  onClose,
  updateCartQuantity,
  removeCartItem,
  onCheckout, // Add onCheckout prop here
}) => {
  // Calculate the subtotal based on the cart items
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );
  };

  // Handle the decrease of item quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateCartQuantity(item.id, item.quantity - 1); // Decrease the quantity
    }
  };

  // Handle the increase of item quantity
  const handleIncrease = (item) => {
    updateCartQuantity(item.id, item.quantity + 1); // Increase the quantity
  };

  // Handle removing an item completely from the cart
  const handleRemoveItem = (item) => {
    removeCartItem(item.id); // Call the removeCartItem function to remove the item
  };

  return (
    <Box className={`cartDrawer ${isOpen ? "open" : ""}`}>
      {/* Header */}
      <Box className="cartHeader">
        <Typography variant="h5">Shopping Cart</Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      <Divider />

      {/* Cart Body */}
      <Box className="cartBody">
        {cartItems.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          cartItems.map((item) => (
            <Box key={item.id} className="cartItem">
              {/* Image with safe check */}
              {item.images && item.images.length > 0 ? (
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="cartItemImage"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/150"
                  alt="Placeholder"
                  className="cartItemImage"
                />
              )}

              <Box className="cartItemInfo">
                <Box className="cartItemHeader">
                  <Typography variant="h6">{item.title}</Typography>

                  {/* Remove item cross icon */}
                  <IconButton onClick={() => handleRemoveItem(item)}>
                    <Close />
                  </IconButton>
                </Box>
                <Typography variant="body2">Book Type: {item.type}</Typography>
                <Typography variant="body2">₹ {item.price || 0}</Typography>

                {/* Quantity Control */}
                <Box className="quantitySection">
                  <IconButton onClick={() => handleDecrease(item)}>
                    <Remove />
                  </IconButton>
                  <Typography>Quantity - {item.quantity || 1}</Typography>
                  <IconButton onClick={() => handleIncrease(item)}>
                    <Add />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>

      {/* Subtotal and Checkout */}
      {cartItems.length > 0 && (
        <Box className="cartFooter">
          <Typography variant="h6">
            Subtotal: ₹ {calculateSubtotal()}
          </Typography>
          <Button
            variant="contained"
            className="checkoutButton"
            onClick={onCheckout} // Trigger checkout when button is clicked
          >
            Check Out
          </Button>
          <Link to="/view-cart" style={{ textDecoration: "none" }}>
            {" "}
            {/* Add the link to view cart */}
            <Button variant="outlined" className="viewCartButton">
              View Cart
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default CartDrawer;
