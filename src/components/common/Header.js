import React, { useEffect, useState } from "react";
import logo from "../../assets/images/99notes.webp";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  AppBar,
  Toolbar,
  Link as MuiLink, // For external links
} from "@mui/material";
import {
  Search,
  PersonOutline,
  FavoriteBorder,
  ShoppingCart,
} from "@mui/icons-material";
import "./Header.css"; // Import the updated CSS file

const Header = ({ cartItems, onCartClick }) => {
  const [blink, setBlink] = useState(false);

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Blink effect when items are added to cart
  useEffect(() => {
    if (totalQuantity > 0) {
      setBlink(true);
      const timer = setTimeout(() => setBlink(false), 500); // Blink for 500ms
      return () => clearTimeout(timer);
    }
  }, [totalQuantity]);

  return (
    <>
      {/* Top Banner */}
      <Box className="topBanner">
        <Typography variant="body2">
          10% Off on your first order! | Use Code: FIRSTORDER
        </Typography>
      </Box>

      {/* Main Header */}
      <AppBar position="static" className="header">
        <Toolbar className="toolbar">
          {/* Logo Section */}
          <Box className="logoSection">
            <Link to="/" className="link">
              {" "}
              {/* Redirect to homepage when clicked */}
              <img src={logo} alt="logo" className="logoImage" />
            </Link>
            <Typography className="logoText">99NOTES</Typography>
          </Box>

          {/* Navigation Links */}
          <Box className="navLinks">
            <MuiLink component={Link} to="/products" className="navLink">
              All Products
            </MuiLink>
            <MuiLink component={Link} to="/explore" className="navLink">
              Explore 99Notes
            </MuiLink>

            {/* More Dropdown */}
            <Box className="dropdown">
              <MuiLink component="button" className="navLink">
                More
              </MuiLink>
              <Box className="dropdown-content">
                {/* Add link to All Products page here */}
                <MuiLink
                  component={Link}
                  to="/products"
                  className="dropdown-item"
                >
                  All Products
                </MuiLink>
              </Box>
            </Box>
          </Box>

          {/* Search Bar and Icons */}
          <Box className="iconSection">
            {/* Search Input */}
            <Box className="searchSection">
              <InputBase
                placeholder="search products"
                className="searchInput"
                inputProps={{ "aria-label": "search products" }}
              />
              <IconButton aria-label="search">
                <Search />
              </IconButton>
            </Box>

            {/* User Icon */}
            <IconButton aria-label="account">
              <Link to="/account" className="iconLink">
                <PersonOutline />
              </Link>
            </IconButton>

            {/* Wishlist Icon */}
            <IconButton aria-label="wishlist">
              <FavoriteBorder />
            </IconButton>

            {/* Cart Icon with Quantity */}
            <IconButton
              className={`cartIcon ${blink ? "blink" : ""}`}
              aria-label="cart"
              onClick={onCartClick} // Toggle cart drawer on click
            >
              <Badge badgeContent={totalQuantity} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
