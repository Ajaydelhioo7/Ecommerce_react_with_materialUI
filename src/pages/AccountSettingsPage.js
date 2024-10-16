import React, { useState, useEffect } from "react";
import { getAuth, updateProfile, signOut } from "firebase/auth";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const AccountSettingsPage = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [statusMessage, setStatusMessage] = useState("");

  // Handle updating the user's display name
  const handleUpdateProfile = async () => {
    try {
      await updateProfile(user, { displayName: name });
      setStatusMessage("Profile updated successfully.");
    } catch (error) {
      console.error("Error updating profile: ", error);
      setStatusMessage("Error updating profile.");
    }
  };

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/"; // Redirect to homepage after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Account Settings
          </Typography>
        </Box>

        {/* Form for updating profile */}
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={email}
                disabled // Email cannot be changed directly here
                variant="outlined"
              />
            </Grid>
          </Grid>

          {statusMessage && (
            <Typography color="secondary" variant="body2" sx={{ mt: 2 }}>
              {statusMessage}
            </Typography>
          )}

          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleUpdateProfile}
          >
            Update Profile
          </Button>

          <Button
            type="button"
            fullWidth
            variant="outlined"
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AccountSettingsPage;
