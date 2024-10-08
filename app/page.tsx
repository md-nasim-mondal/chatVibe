import React from "react";
import Communication from "@/components/landingPage/Section/Communication";
import AboutUs from "@/components/landingPage/Section/AboutUs";
import Banner from "@/components/landingPage/Section/Banner";
import Conversations from "@/components/landingPage/Section/Conversations";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Communication />
      <Conversations />
      <AboutUs />
    </div>
  );
};

export default LandingPage;
