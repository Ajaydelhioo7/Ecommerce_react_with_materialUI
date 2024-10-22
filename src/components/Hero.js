import React, { useState } from "react";
import { Box, Typography, InputBase, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./css/Hero.css";

// Placeholder images for carousel
const carouselImages = [
  "https://via.placeholder.com/150x230?text=Book+1",
  "https://via.placeholder.com/150x230?text=Book+2",
  "https://via.placeholder.com/150x230?text=Book+3",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

  // Handle the next button (go to the next image)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length); // Loop back to start
  };

  // Handle the previous button (go to the previous image)
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    ); // Loop back to the last image
  };

  return (
    <Box className="heroSection">
      {/* Left Side */}
      <Box className="heroTextSection">
        <Typography variant="h2" className="heroHeading">
          Buy Civil Services Textbooks for the best price
        </Typography>
        <Typography variant="body1" className="heroDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        {/* Search Section */}
        <Box className="searchSectionhero">
          <InputBase
            placeholder="Search for ISBN number"
            className="isbnInput"
            inputProps={{ "aria-label": "search ISBN" }}
          />
          <Button variant="contained" className="searchButton">
            Search
          </Button>
        </Box>
      </Box>

      {/* Right Side Carousel */}
      <Box className="carouselSection">
        <IconButton className="carouselButton" onClick={handlePrev}>
          <ArrowBackIos />
        </IconButton>

        {/* Carousel: Only show one image at a time */}
        <Box className="carousel">
          <img
            src={carouselImages[currentIndex]}
            alt={`Book ${currentIndex + 1}`}
            className="carouselImage"
          />
        </Box>

        <IconButton className="carouselButton" onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;
