import React from "react";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import "./ProductCard.css"; // Ensure you update or add corresponding CSS styles

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {/* Discount Badge */}
      <div className="discount-badge">50% Off</div>

      {/* Product Image */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-image"
      />

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>

        {/* Product Pricing */}
        <p className="price">
          ₹ {product.price}{" "}
          <span className="original-price">₹ {product.originalPrice}</span>
        </p>

        {/* Buttons: Add to Cart & Buy Now */}
        <div className="button-group">
          <Button
            variant="contained"
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product, 1)}
          >
            Add to Cart
          </Button>
          <Button
            variant="contained"
            className="buy-now-btn"
            onClick={() => {
              /* Handle Buy Now */
            }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
