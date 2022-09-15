import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <AppBar position="relative">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ mr: 1 }}>
              <IconButton size="large" color="inherit"></IconButton>
            </Box>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              MedCloud Clients
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              MedCloud Clients
            </Typography>
            <Button color="inherit">
              <Link to="/patient" style={{ textDecoration: "none" }}>
                SignUp
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
