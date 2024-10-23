import React from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";
import "./ViewCartPage.css";

const ViewCartPage = ({ cartItems, updateCartQuantity, removeCartItem }) => {
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

  return (
    <Box className="viewCartPage">
      <Typography variant="h3" className="cartTitle">
        Your Shopping Cart
      </Typography>

      <Box className="cartTable">
        <Box className="cartTableHeader">
          <Typography variant="h6">Product</Typography>
          <Typography variant="h6">Price</Typography>
          <Typography variant="h6">Quantity</Typography>
          <Typography variant="h6">Total</Typography>
        </Box>

        {cartItems.map((item) => (
          <Box key={item.id} className="cartItemRow">
            <Box className="cartItemInfo">
              <img
                src={item.images[0]}
                alt={item.title}
                className="cartItemImage"
              />
              <Typography variant="body1">{item.title}</Typography>
              <Button onClick={() => removeCartItem(item.id)}>Remove</Button>
            </Box>
            <Typography>₹ {item.price || 0}</Typography>

            {/* Quantity Control */}
            <Box className="quantitySection">
              <IconButton onClick={() => handleDecrease(item)}>
                <Remove />
              </IconButton>
              <Typography>{item.quantity || 1}</Typography>
              <IconButton onClick={() => handleIncrease(item)}>
                <Add />
              </IconButton>
            </Box>
            <Typography>₹ {item.price * item.quantity}</Typography>
          </Box>
        ))}

        <Divider />

        <Box className="cartSummary">
          <Typography variant="h6">
            Subtotal: ₹ {calculateSubtotal()}
          </Typography>
          <Button variant="contained" color="primary">
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewCartPage;
