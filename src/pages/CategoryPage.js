import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import "./css/CategoryPage.css"; // Import styles

const categories = ["All", "History", "Polity", "Geography"];

const products = [
  {
    id: 101,
    title: "Modern India",
    price: 499,
    originalPrice: 999,
    discount: 50,
    category: "History",
    image: "https://via.placeholder.com/150x230?text=Modern+Indian+History",
  },
  {
    id: 102,
    title: "Medieval Indian",
    price: 499,
    originalPrice: 999,
    discount: 50,
    category: "History",
    image: "https://via.placeholder.com/150x230?text=Medieval+Indian+History",
  },
  {
    id: 103,
    title: "Ancient India",
    price: 499,
    originalPrice: 999,
    discount: 50,
    category: "History",
    image: "https://via.placeholder.com/150x230?text=Ancient+Indian+History",
  },
  {
    id: 104,
    title: "Indian Polity P-2",
    price: 499,
    originalPrice: 999,
    discount: 50,
    category: "Polity",
    image: "https://via.placeholder.com/150x230?text=Indian+Polity+Part+2",
  },
];

const CategoryPage = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Box className="categoryPage">
      {/* Topbar with Categories */}
      <Box className="categoryTopbar">
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "contained" : "text"}
            className="categoryButton"
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3} className="productGrid">
        {filteredProducts.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.id}
            className="productCard"
          >
            <Box className="productContainer">
              <img
                src={product.image}
                alt={product.title}
                className="productImage"
              />
              <Typography variant="h6" className="productTitle">
                {product.title}
              </Typography>
              <Typography variant="body1" className="productPrice">
                ₹ {product.price}{" "}
                <span className="originalPrice">₹ {product.originalPrice}</span>
              </Typography>

              {/* Product Buttons */}
              <Box className="productButtons">
                <Button
                  variant="contained"
                  className="addToCartButton"
                  onClick={() => onAddToCart(product)} // This will now work
                >
                  Add to Cart
                </Button>

                <Button variant="contained" className="buyNowButton">
                  Buy Now
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
