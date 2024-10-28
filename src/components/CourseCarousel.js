// src/components/CourseCarousel.js
import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { fetchCoursesByCategory } from "../api/courseApi"; // Import the API function
import "./css/CourseCarousel.css";

const CourseCarousel = ({ categoryTitle }) => {
  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  // Fetch courses when component mounts or categoryTitle changes
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const fetchedCourses = await fetchCoursesByCategory(categoryTitle);
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Failed to load courses:", error);
      }
    };

    loadCourses();
  }, [categoryTitle]);

  // Pagination control
  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? courses.length - itemsToShow : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === courses.length - itemsToShow ? 0 : currentIndex + 1
    );
  };

  const visibleCourses = courses.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <Box className="carouselContainer">
      <Typography variant="h4" className="categoryTitle">
        {categoryTitle}
      </Typography>

      <Box className="carouselWrapper">
        <IconButton onClick={handlePrev} className="carouselButton">
          <ArrowBackIos />
        </IconButton>

        <Box className="carouselContent">
          {visibleCourses.map((course) => (
            <Box
              key={course.id}
              className="carouselItem"
              onClick={() => (window.location.href = `/course/${course.id}`)}
            >
              <Box className="courseDiscount">15% Off</Box>
              <Box className="courseImagePlaceholder">
                <img src={course.image} alt={course.title} />
              </Box>
              <Typography variant="h6" className="courseTitle">
                {course.title}
              </Typography>
              <Typography variant="body2" className="coursePrice">
                ₹ {course.price}
              </Typography>
            </Box>
          ))}
        </Box>

        <IconButton onClick={handleNext} className="carouselButton">
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CourseCarousel;
