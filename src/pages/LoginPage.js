import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import {
  Container,
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./css/LoginPage.css"; // Assuming you have some custom CSS for further fine-tuning

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in as:", user.displayName);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        {/* Breadcrumb */}
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>{" "}
          &gt; Account
        </Typography>

        <Grid container spacing={2}>
          {/* Login Section */}
          <Grid item xs={12} md={6}>
            <Typography component="h1" variant="h4" gutterBottom>
              Log In
            </Typography>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
              sx={{
                mb: 2,
                backgroundColor: "#f7f7f7",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              Sign in with Google
            </Button>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Or login with email
            </Typography>

            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 1 }}
            />

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                Forgot your password?
              </Link>
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#f7961c", color: "#fff" }}
            >
              Sign in
            </Button>
          </Grid>

          {/* Register Section */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mx: 2, display: { xs: "none", md: "block" } }}
          />

          <Grid item xs={12} md={5}>
            <Typography component="h1" variant="h4" gutterBottom>
              New Customer
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Sign up for early sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#f7961c",
                color: "#fff",
                mt: 3,
                padding: "10px 20px",
              }}
              component={Link}
              to="/register" // Redirect to your registration page
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;
