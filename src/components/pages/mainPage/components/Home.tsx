import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "./about/AboutCard";
import Why from "./why/Why";
import ExtraCourses from "./extra_courses/ExtraCourses";
import Comments from "./comments/Comments";
import JoinUs from "./join_us/JoinUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <Why />
      <ExtraCourses />
      <Comments />
      <JoinUs />
    </div>
  );
};

export default Home;
