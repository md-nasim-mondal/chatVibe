'use client'
import React, { useEffect } from "react";
import Communication from "@/components/landingPage/Section/Communication";
import AboutUs from "@/components/landingPage/Section/AboutUs";
import Banner from "@/components/landingPage/Section/Banner";
import Conversations from "@/components/landingPage/Section/Conversations";
import { useUser } from "@clerk/clerk-react";


const LandingPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();




 useEffect(()=>{
  
  if(isSignedIn && isLoaded && user){
console.log(user)
  }
  },[user])
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
