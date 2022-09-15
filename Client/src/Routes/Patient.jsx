import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import AreaUsers from "../components/AreaUsers";
import InfBar from "../components/InfBar";
import FormPatient from "../components/FormPatient";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <FormPatient />
      <InfBar />
    </Box>
  );
};

export default Home;
