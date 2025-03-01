import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "./about/AboutCard";
import Why from "./why/Why";
import ExtraCourses from "./extra_courses/ExtraCourses";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <Why />
      <ExtraCourses />
    </div>
  );
};

export default Home;
