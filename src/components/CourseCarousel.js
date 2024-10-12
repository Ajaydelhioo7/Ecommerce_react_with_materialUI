import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./css/CourseCarousel.css";

// Reusable Carousel Component
const CourseCarousel = ({ categoryTitle, courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Define how many items to show at a time

  // Handle clicking on the previous button
  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? courses.length - itemsToShow : currentIndex - 1
    );
  };

  // Handle clicking on the next button
  const handleNext = () => {
    setCurrentIndex(
      currentIndex === courses.length - itemsToShow ? 0 : currentIndex + 1
    );
  };

  // Get the items to show (slice array based on the current index)
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
        {/* Left Arrow */}
        <IconButton onClick={handlePrev} className="carouselButton">
          <ArrowBackIos />
        </IconButton>

        {/* Carousel Items */}
        <Box className="carouselContent">
          {visibleCourses.map((course, index) => (
            <Box
              key={course.id}
              className="carouselItem"
              onClick={() => (window.location.href = `/course/${course.id}`)} // Clickable
            >
              <Box className="courseDiscount">15% Off</Box>
              <Box className="courseImagePlaceholder"></Box>{" "}
              {/* Placeholder for course image */}
              <Typography variant="h6" className="courseTitle">
                {course.title}
              </Typography>
              <Typography variant="body2" className="coursePrice">
                ₹ {course.price}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton onClick={handleNext} className="carouselButton">
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CourseCarousel;
