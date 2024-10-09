"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import SmallNav from "./SmallNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Nav = () => {
  const { user } = useUser() || {};
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState(pathname); // State to manage the active route
  const dynamicColorStart = "#14B8A6"; // Base teal color
  const dynamicColorVia = "#14B8A6";   // Vibrant light teal
  const dynamicColorEnd = "#14B8A6";   // Bright aqua color

  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const handleLinkClick = (address: React.SetStateAction<string>) => {
    setActiveRoute(address); // Update the active route state
  };

  const navRoutes = [
    { label: "Home", address: "/" },
    { label: "Pricing", address: "/pricing" },
    { label: "About", address: "/#about" },
    { label: "Contact", address: "/contact" },
    { label: "Dashboard", address: "/dashboard" },
  ];

  return (
    <nav className="text-main-1 bg-dark-1 shadow-lg relative flex justify-between items-center pr-2 py-5 md:p-0">
      <div className="flex justify-between items-center container mx-auto">
      <Link href={`/`} className='flex items-center text-center md:p-5 font-bold text-3xl text-main-1 gap-1'>
        <Image
          src={`/icons/logo.svg`}
          width={32}
          height={32}
          alt='Chat Vibe'
          className='max-sm:size-10'
        />
<p
  className='text-[26px] font-extrabold bg-clip-text text-transparent max-sm:hidden'
  style={{
    backgroundImage: 'linear-gradient(90deg, #14B8A6, #12A193, #10A0B0)',
  }}
>
  ChatVibe
</p>

      </Link>

        {/* desktop menu */}
        <menu className="hidden md:flex items-center gap-20 text-white font-semibold mr-6">
          <ul className="flex gap-4">
            {navRoutes.map(({ label, address }, index) => {
              // Check if the current route is active
              const isActive = activeRoute === address;

              return (
                <li
                  key={index + 1}
                  className={`transition-all duration-300 ease-in-out transform ${
                    isActive
                      ? "text-main-1 border-b-2 border-b-main-1"
                      : `hover:text-[#96d5cf] hover:bg-clip-text 
                          hover:bg-gradient-to-r from-[${dynamicColorStart}] 
                          via-[${dynamicColorVia}] to-[${dynamicColorEnd}] 
                          hover:border-b-2 hover:border-b-transparent 
                          hover:bg-clip-border hover:bg-gradient-to-r 
                          hover:from-[${dynamicColorStart}] 
                          hover:via-[${dynamicColorVia}] 
                          hover:to-[${dynamicColorEnd}] 
                          hover:scale-105 hover:shadow-lg`
                  }`}
                >
                  <Link href={address} onClick={() => handleLinkClick(address)}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </menu>

        <div>
          {user ? (
            <div className=" flex justify-center items-center">
              <UserButton />
            </div>
          ) : (
            <ul className="hidden md:flex items-center gap-1">
              <li className="py-2 px-4 text-xl hover:text-white hover:scale-105 transition-all">
              <Button className="text-white bg-main-2 hover:bg-main-1">
  <Link href="/sign-in">Login</Link> 
 
</Button>
              </li>
            </ul>
          )}
        </div>
        {/* mobile menu */}
        {/* <MobileMenu /> */}
      </div>
      <div className="md:hidden left-0 top-[72px]">
        {/* <Sidebar /> */}
        <SmallNav />
      </div>
    </nav>
  );
};

export default Nav;
