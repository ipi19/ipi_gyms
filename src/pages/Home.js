import { Box } from "@mui/material";
import React from "react";
import Exercises from "../components/Exercises";
import SerachExercises from "../components/SerachExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SerachExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
