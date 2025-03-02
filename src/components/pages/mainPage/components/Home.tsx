import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "./about/AboutCard";
import Why from "./why/Why";
import ExtraCourses from "./extra_courses/ExtraCourses";
import Comments from "./comments/Comments";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <Why />
      <ExtraCourses />
      <Comments />
    </div>
  );
};

export default Home;
