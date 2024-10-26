import axios from "axios";

const API_BASE_URL = "https://your-backend-api-url.com/api"; // Replace with your backend URL

// Fetch products with optional filtering
export const fetchProducts = async (filters = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: filters, // Pass filters as query params
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
