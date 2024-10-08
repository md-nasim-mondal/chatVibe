import Image from "next/image";
import React from "react";
import SectionContainer from "../ShareComponents/SectionContainer";

const Communication = () => {
  return (
    <SectionContainer>
      <div className='flex flex-col md:flex-row justify-around items-center gap-8'>
        <div className='md:flex-1 lg:flex-initial'>
          <Image
            src={`https://i.ibb.co.com/M5GtMCV/message.png`}
            alt='Secure Conversations'
            className='lg:w-[460px] lg:h-[460px]  mt-6 object-cover border-0 rounded-xl'
            width={320}
            height={320}
          />
        </div>

        <div className='flex flex-col justify-center md:flex-1 lg:flex-initial'>
          <h2 className='text-4xl font-bold'>
            <span className='text-blue-500'>Communication</span>{" "}
            <span className='text-white'>with Live Discussions</span>
          </h2>
          <p className='text-base text-[#677471] lg:w-[500px] pt-4'>
            Discuss directly with the team, you can send document files for the
            next level of collaboration.
          </p>
          <button className='p-2 md:py-2 md:px-4 rounded-lg hover:bg-blue-600 transition duration-300 border-0 text-white text-base mt-4 bg-blue-500 '>
            Learn More
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Communication;
