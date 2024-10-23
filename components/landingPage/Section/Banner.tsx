"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionContainer from "../ShareComponents/SectionContainer";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      text: "Get a Link You Can Share",
      description: "Click new meeting to create a new meeting and share the link.",
      img: "https://i.ibb.co/n1F00XJ/Screenshot-76-removebg-preview-1.png",
    },
    {
      text: "Connect with Anyone",
      description: "Invite your team members to join the meeting via a shared link.",
      img: "https://i.ibb.co/0nvdBq6/isometric-recruiting-icon-with-male-recruiter-communicating-with-two-job-candidates-round-office-tab.png",
    },
    {
      text: "Your meeting is safe",
      description: "No one can join a meeting unless invited or admitted by host.",
      img: "https://i.ibb.co/fnFdFVD/secure.png",
    },
    {
      text: "User friendly interface",
      description: "Navigate through our intuitive platform with ease.",
      img: "https://i.ibb.co/ynh16GR/memory.png",
    },
    {
      text: "Record Your Meetings",
      description: "Capture important discussions and decisions by recording your meetings.",
      img: "https://i.ibb.co/8m4bpcH/3707547-removebg-preview.png",
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="overflow-x-hidden">
      <SectionContainer>
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly">
          <motion.div
            className="h-full flex flex-col justify-center text-left md:p-4 lg:p-4 lg:mr-4 space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Meeting and Video Call for <br />
              Everyone with
              <span className="text-main-1"> ChatVibe</span>
            </h1>
            <motion.div
              className="flex justify-center w-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/dashboard"
                className="w-full text-center bg-main-2 text-white p-2 md:py-2 md:px-4 rounded-lg hover:bg-main-3 transition duration-300"
              >
                Try Now
                <h1>try now</h1>
              </Link>
            </motion.div>

            <p className="mt-10 text-gray-300">
              Learn more about{" "}
              <a href="#" className="text-main-1 hover:underline">
                Our team.
              </a>
            </p>
          </motion.div>

          <motion.div
            className="flex-1 h-[500px] max-w-full md:max-w-[620px] pb-12 lg:max-w-[720px] lg:ml-8 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="p-6 rounded-lg h-full flex flex-col justify-center space-y-4"
              key={activeSlide}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
            >
              <Image
                width={208}
                height={208}
                src={slides[activeSlide].img}
                alt={slides[activeSlide].text}
                className="w-52 h-52 rounded-full mx-auto"
              />
              <p className="mt-4 text-center text-main-1 font-semibold">
                {slides[activeSlide].text}
              </p>
              <p className="mt-2 text-center text-sm text-white">
                {slides[activeSlide].description}
              </p>
            </motion.div>

            {/* Arrow controls */}
            <div className="flex justify-between mt-4">
              <span
                onClick={() =>
                  setActiveSlide((activeSlide - 1 + slides.length) % slides.length)
                }
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-main-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
              <span
                onClick={() =>
                  setActiveSlide((activeSlide + 1) % slides.length)
                }
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-main-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 mx-1 rounded-full ${
                    activeSlide === index ? "bg-main-1" : "bg-gray-300"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Banner;
