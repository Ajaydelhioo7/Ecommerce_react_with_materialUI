// src/api/courseApi.js
import axios from "axios";

const API_BASE_URL = "https://your-backend-api-url.com/api"; // Replace with your actual backend URL

// Fetch courses by category
export const fetchCoursesByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/courses`, {
      params: { category },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};
