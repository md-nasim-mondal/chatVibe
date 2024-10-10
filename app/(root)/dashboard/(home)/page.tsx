"use client";
import Statistics from "@/components/dashboard/adminDashboard/Statistics";
import MeetingTypeList from "@/components/meetComponents/MeetingTypeList";
import useGetRoleOrUser from "@/hooks/apiHooks/userHooks/useGetRoleOrUser";
import saveUserApi from "@/utilities/api-call/saveUserApi";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && isLoaded && user) {
      saveUserApi(user);
    }
  }, [user]);
  const now = new Date();

  const time = now.toLocaleTimeString("en-BD", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Dhaka",
  });

  const date = new Intl.DateTimeFormat("en-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  }).format(now);

  return (
    <section className='flex size-full flex-col gap-10 text-white '>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
            <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
              <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal '>
                Upcoming Meeting at: 12.30 PM
              </h2>
              <div className='flex flex-col gap-2'>
                <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
                <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
                  {date}
                </p>
              </div>
            </div>
          </div>
          <MeetingTypeList />
    </section>
  );
};

export default Home;
