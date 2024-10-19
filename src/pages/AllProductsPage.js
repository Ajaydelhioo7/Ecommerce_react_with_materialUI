import React, { useState } from "react";
import ProductCard from "../components/product/ProductCard";
import products from "../components/product/data/products";
import "./AllProductsPage.css";

const AllProductsPage = ({ onAddToCart }) => {
  const [filters, setFilters] = useState({
    subject: [],
    exam: [],
    category: [],
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];
      return { ...prevFilters, [filterType]: updatedFilter };
    });
  };

  const filteredProducts = products.filter((product) => {
    const { subject, exam, category } = filters;

    const subjectMatch =
      subject.length === 0 || subject.includes(product.subject);
    const examMatch = exam.length === 0 || exam.includes(product.exam);
    const categoryMatch =
      category.length === 0 || category.includes(product.category);

    return subjectMatch && examMatch && categoryMatch;
  });

  return (
    <div className="all-products-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <span>Home</span> &gt; <span>All Products</span>
      </div>

      <div className="content">
        {/* Filters */}
        <aside className="filter-section">
          <h4>Filter by</h4>

          {/* Subject Filters */}
          <div className="filter-group">
            <h5>Subject</h5>
            <label>
              <input
                type="checkbox"
                value="History"
                onChange={() => handleFilterChange("subject", "History")}
              />
              History
            </label>
            <label>
              <input
                type="checkbox"
                value="Polity"
                onChange={() => handleFilterChange("subject", "Polity")}
              />
              Polity
            </label>
            <label>
              <input
                type="checkbox"
                value="Geography"
                onChange={() => handleFilterChange("subject", "Geography")}
              />
              Geography
            </label>
            {/* Add more subjects here */}
          </div>

          {/* Exam Filters */}
          <div className="filter-group">
            <h5>Exam</h5>
            <label>
              <input
                type="checkbox"
                value="UPSC"
                onChange={() => handleFilterChange("exam", "UPSC")}
              />
              UPSC
            </label>
            <label>
              <input
                type="checkbox"
                value="SSC"
                onChange={() => handleFilterChange("exam", "SSC")}
              />
              SSC
            </label>
            <label>
              <input
                type="checkbox"
                value="State PSC"
                onChange={() => handleFilterChange("exam", "State PSC")}
              />
              State PSC
            </label>
          </div>

          {/* Category Filters */}
          <div className="filter-group">
            <h5>Category</h5>
            <label>
              <input
                type="checkbox"
                value="Text Book"
                onChange={() => handleFilterChange("category", "Text Book")}
              />
              Text Book
            </label>
            <label>
              <input
                type="checkbox"
                value="Objective Paper"
                onChange={() =>
                  handleFilterChange("category", "Objective Paper")
                }
              />
              Objective Paper
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
