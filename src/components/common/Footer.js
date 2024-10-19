import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { Email, ArrowForward } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footerContainer">
      {/* Top Section: Newsletter and Links */}
      <Box className="footerTop">
        {/* Newsletter */}
        <Box className="newsletter">
          <Typography variant="h4" className="footerHeading">
            Let's Get In Touch
          </Typography>
          <Typography variant="body1" className="footerDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box className="newsletterInput">
            <Email className="emailIcon" />
            <TextField
              className="emailInput"
              variant="outlined"
              placeholder="Enter your email"
            />
            <IconButton className="newsletterButton">
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>

        {/* Footer Links */}
        <Box className="footerLinks">
          <Typography variant="h6">Links</Typography>
          <ul>
            <li>Search</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </Box>

        {/* Contact Us */}
        <Box className="footerContact">
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">+91-9654638994</Typography>
          <Typography variant="body2">
            <a href="mailto:Info@99notes.in">Info@99notes.in</a>
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box className="footerSocial">
          <Typography variant="h6">Lets Get Social</Typography>
          <Box className="socialIcons">
            <IconButton>
              <i className="fab fa-facebook"></i>
            </IconButton>
            <IconButton>
              <i className="fab fa-instagram"></i>
            </IconButton>
            <IconButton>
              <i className="fab fa-youtube"></i>
            </IconButton>
            <IconButton>
              <i className="fab fa-tiktok"></i>
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box className="footerBottom">
        <Typography variant="body2">
          © 2024 99Notes.in All Right Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
