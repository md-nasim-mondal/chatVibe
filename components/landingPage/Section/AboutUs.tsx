import React from "react";
import SectionContainer from "../ShareComponents/SectionContainer";
import Member from "../ShareComponents/Member";

const AboutUs = () => {
  const members = [
    {
      name: "Md Atikuzzaman",
      img: "/images/atikuzzaman.png",
      profession: "Web Developer",
      role: "Team Leader/Developer",
    },
    {
      name: "Md Shamim",
      img: "/images/shamim.jpg",
      profession: "Web Developer",
      role: "UI Designer/Developer",
    },
    {
      name: "Sarajit Mandal",
      img: "/images/sarajit.jpg",
      profession: "Web Developer",
      role: "Programmer/Developer",
    },
    {
      name: "Md. Nasim Mondal",
      img: "/images/nasim.jpg",
      profession: "Web Developer",
      role: "Programmer/Developer",
    },
    {
      name: "Md Mahadi Hasan",
      img: "/images/mahadi.jpg",
      profession: "Web Developer",
      role: "Programmer/Developer",
    },
    {
      name: "Ashraful Islam",
      img: "/images/asrafulislam.jpg",
      profession: "Web Developer",
      role: "Programmer/Developer",
    },
  ];
  return (
      <SectionContainer>
        <div id='about' className='text-center pb-12'>
          <h2 className='text-4xl font-bold text-main-1'>About Us</h2>
          <p className='text-xl font-semibold capitalize text-white'>
            Meet our team members
          </p>
        </div>
        <div className='flex gap-4 md:gap-2 flex-wrap justify-around'>
          {members?.map(({ name, img, profession, role }, idx) => (
            <Member
              key={idx + 1}
              name={name}
              src={img}
              profession={profession}
              role={role}
            />
          ))}
        </div>
      </SectionContainer>
  );
};

export default AboutUs;
