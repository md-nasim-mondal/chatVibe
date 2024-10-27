"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import SmallNav from "./SmallNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsChatSquareText } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import MessageUserList from "@/components/messageComponents/MessageUserList";



const Nav = () => {
  const [isDropDown,setIsDropDown] = useState(false)
  const { user } = useUser() || {};
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState(pathname); 

  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const handleLinkClick = (address: React.SetStateAction<string>) => {
    setActiveRoute(address); 
  };

  const navRoutes = [
    { label: "Home", address: "/" },
    { label: "Pricing", address: "/pricing" },
    { label: "About", address: "/#about" },
    { label: "Contact", address: "/contact" },
    { label: "Dashboard", address: "/dashboard" },
  ];

  return (
    <motion.nav
      className="text-main-1 bg-dark-1 shadow-lg relative flex justify-between items-center pr-2 py-5 md:p-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center container mx-auto md:py-5">
        <Link
          href={`/`}
          className="flex items-center text-center md:px-2 font-bold text-3xl text-main-1 gap-1"
        >
          <Image
            src={`/images/logo.png`}
            width={36}
            height={36}
            alt="Chat Vibe"
            className="max-sm:size-10"
          />
          <p
            className="text-[26px] lg:text-3xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #14B8A6, #12A193, #10A0B0)",
            }}
          >
            ChatVibe
          </p>
        </Link>

        {/* desktop menu */}
        <menu className="hidden md:flex items-center gap-20 text-white font-semibold mr-6">
          <ul className="flex gap-4">
            {navRoutes.map(({ label, address }, index) => {
              const isActive = activeRoute === address;

              return (
                <motion.li
                  key={index + 1}
                  className={`transition-all duration-300 ease-in-out transform text-lg ${
                    isActive
                      ? "text-main-1 border-b-2 border-b-main-1"
                      : "hover:text-[#96d5cf] hover:scale-105"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link href={address} onClick={() => handleLinkClick(address)}>
                    {label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </menu>


        {/* user profile and notification and message icon */}
        {user ? (
         <div className="flex gap-2 items-center">
            {/* chat icon */}
                <div
                  onClick={() => setIsDropDown(!isDropDown)}
                  className="size-8 flex justify-center rounded-full items-center  cursor-pointer"
                >
                    <BsChatSquareText  className="text-main-1 text-xl font-extrabold hover:scale-105 transition-all"/>
                    
                    {
                      isDropDown && <MessageUserList    position ="right-0" place="absolute"/>
                    }
                </div>

           {/* notification icon */}
               <div
                  onClick={() => setIsDropDown(false)}
                  className=" py-1 px-2 relative text-2xl text-main-1
                  hover:text-white  hover:scale-105 transition-all cursor-pointer"
                >
                  <IoNotifications />
                  <span className="bg-red-500 rounded-full size-4  text-[12px] font-bold absolute -top-1 left-5 flex justify-center items-center text-white">
                    3
                  </span>
                </div>
           <motion.div 
          className="cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
       >
            <UserButton />
          </motion.div>
         </div>
        ) : (
          <ul className="hidden md:flex items-center gap-1">
            <li>
              <Link
                href="/sign-in"
               
              >
<Button
  className=" text-white bg-main-2  px-7 hover:bg-transparent hover:border
  transition-all duration-300 ease-in-out transform hover:scale-105"
>
  Login
</Button>

              </Link>
            </li>
          </ul>
        )}

        {/* mobile menu */}
        <div className="md:hidden left-0 top-[72px]">
          <SmallNav />
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
