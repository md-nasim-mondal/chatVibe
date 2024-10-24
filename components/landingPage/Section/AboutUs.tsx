import React from "react";
import SectionContainer from "../ShareComponents/SectionContainer";
import Member from "../ShareComponents/Member";
import { motion } from "framer-motion";

const AboutUs = () => {
  const members = [
    {
      name: "Md Atikuzzaman",
      img: "/images/atikuzzaman.png",
      profession: "Web Developer",
      role: "Team Leader/Developer",
      url: "https://atikuzzaman.netlify.app/"
    },
    {
      name: "Md Shamim",
      img: "/images/shamim.jpg",
      profession: "Web Developer",
      role: "UI Designer/Developer",
      url: "https://my-portfolio-tau-gules.vercel.app/"
    },
    {
      name: "Sarajit Mandal",
      img: "/images/sarajit.jpg",
      profession: "Web Developer",
      role: "Programmer/Developer",
      url: "https://protfolio-sarajit-mandal.netlify.app/"
    },
    {
      name: "Md. Nasim Mondal",
      img: "/images/nasim.jpg",
      profession: "Web Developer",
      role: "Programmer/Developer",
      url: "https://md-nasim-mondal-portfolio1.netlify.app/"
    },
    {
      name: "Md Mahadi Hasan",
      img: "/images/mahadi.jpg",
      profession: "Web Developer",
      role: "Programmer/Developer",
      url: "https://mdmahadihasanportfolio.netlify.app/"
    },
    {
      name: "Ashraful Islam",
      img: "/images/asrafulislam.jpg",
      profession: "Web Developer",
      role: "Programmer/Developer",
      url: "https://www.google.com"
    },
  ];

  return (
    <SectionContainer>
      <div id="about" className="text-center pb-12">
        <h2 className="text-4xl font-bold text-main-1">About Us</h2>
        <p className="text-xl font-semibold capitalize text-white">
          Meet our team members
        </p>
      </div>
      <div className="flex gap-4 md:gap-2 flex-wrap justify-around">
        {members.map(({ name, img, profession, role, url }, idx) => (
          <motion.button
            key={idx + 1}
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <Member
              name={name}
              src={img}
              profession={profession}
              role={role}
              url={url}
            />
          </motion.button>
        ))}
      </div>
    </SectionContainer>
  );
};

export default AboutUs;
