import React from "react";
import Communication from "@/components/landingPage/Section/Communication";
import AboutUs from "@/components/landingPage/Section/AboutUs";
import Banner from "@/components/landingPage/Section/Banner";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Communication />
      <AboutUs />
    </div>
  );
};

export default LandingPage;
