import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Routes/Home";
import Patient from "./Routes/Patient";

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
