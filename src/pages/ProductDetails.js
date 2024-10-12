import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import "./css/ProductDetails.css";

// Dummy product data for demonstration purposes
const products = [
  {
    id: 1,
    title: "Foundation Course 2025",
    price: 225000,
    originalPrice: 225000,
    discount: 50,
    type: "Foundation Couse",
    highlights: "For Civil Service Examination General Studies - 1",
    images: [
      "https://via.placeholder.com/150x200",
      "https://via.placeholder.com/150x200",
    ],
    author: "Pulakit Bharti",
    language: "English",
    publisher: "Ajay Upadhyay",
    pages: 335,
    weight: "0.5 kg",
    dimensions: "26*16*7",
    edition: "34th",
  },
  {
    id: 2,
    title: "Foundation Course 2026",
    price: 225000,
    originalPrice: 225000,
    discount: 50,
    type: "Foundation Couse",
    highlights: "For Civil Service Examination General Studies - 1",
    images: [
      "https://via.placeholder.com/150x200",
      "https://via.placeholder.com/150x200",
    ],
    author: "Pulakit Bharti",
    language: "English",
    publisher: "Ajay Upadhyay",
    pages: 335,
    weight: "0.5 kg",
    dimensions: "26*16*7",
    edition: "34th",
  },
  {
    id: 3,
    title: "Foundation Course 2027",
    price: 325000,
    originalPrice: 325000,
    discount: 50,
    type: "Foundation Couse",
    highlights: "For Civil Service Examination General Studies - 1",
    images: [
      "https://via.placeholder.com/150x200",
      "https://via.placeholder.com/150x200",
    ],
    author: "Pulakit Bharti",
    language: "English",
    publisher: "Ajay Upadhyay",
    pages: 335,
    weight: "0.5 kg",
    dimensions: "26*16*7",
    edition: "34th",
  },
  {
    id: 1,
    title: "Foundation Course 2028",
    price: 425000,
    originalPrice: 425000,
    discount: 50,
    type: "Foundation Couse",
    highlights: "For Civil Service Examination General Studies - 1",
    images: [
      "https://via.placeholder.com/150x200",
      "https://via.placeholder.com/150x200",
    ],
    author: "Pulakit Bharti",
    language: "English",
    publisher: "Ajay Upadhyay",
    pages: 335,
    weight: "0.5 kg",
    dimensions: "26*16*7",
    edition: "34th",
  },

  // Add more products here
];

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product details based on the ID
  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  // Handle quantity change
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Box className="productDetailsContainer">
      {/* Breadcrumb */}
      <Box className="breadcrumb">
        <Typography>Home &gt; All Product &gt; {product.title}</Typography>
      </Box>

      <Box className="productMainSection">
        {/* Left Section: Image Carousel */}
        <Box className="productImages">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.title}
              className="productImage"
            />
          ))}
        </Box>

        {/* Right Section: Product Details */}
        <Box className="productInfo">
          <Typography variant="h3" className="productTitle">
            {product.title}
          </Typography>
          <Typography variant="body1">{product.highlights}</Typography>

          <Box className="productPricing">
            <Typography variant="h4" className="productPrice">
              ₹ {product.price}
            </Typography>
            <Typography variant="body2" className="productOriginalPrice">
              ₹ {product.originalPrice}
            </Typography>
            <Box className="discountTag">Save {product.discount}%</Box>
          </Box>

          <Box className="bookType">
            <Typography variant="body2">Book Type: </Typography>
            <Button variant="outlined">{product.type}</Button>
          </Box>

          <Box className="quantitySection">
            <Typography variant="body2">Quantity</Typography>
            <IconButton onClick={handleDecrease}>
              <Remove />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={handleIncrease}>
              <Add />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            className="addToCartButton"
            onClick={() => onAddToCart(product, quantity)}
          >
            <ShoppingCart /> Add to Cart
          </Button>
        </Box>
      </Box>

      {/* Product Highlights and Additional Info */}
      <Box className="productDetailsSection">
        <Typography variant="h5">Product Highlights</Typography>
        <Typography>Author: {product.author}</Typography>
        <Typography>Language: {product.language}</Typography>
        <Typography>Publisher: {product.publisher}</Typography>
        <Typography>Pages: {product.pages}</Typography>
        <Typography>Weight: {product.weight}</Typography>
        <Typography>Dimensions: {product.dimensions}</Typography>
        <Typography>Edition: {product.edition}</Typography>
      </Box>

      {/* Product Description */}
      <Box className="productDescriptionSection">
        <Typography variant="h6">Product Description</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
