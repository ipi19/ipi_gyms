import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ExeciseDetail from "./pages/ExeciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box widith="400px">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          sx={{ with: { xl: "1488px" } }}
          m="auto"
        />
        <Route path="/exercise/:id" element={<ExeciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
