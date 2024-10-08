"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { UserButton, useUser } from "@clerk/nextjs";
import Sidebar from "./Sidebar";
import SmallNav from "./SmallNav";
import { usePathname } from "next/navigation";

const Nav = () => {
  const { user, isLoaded } = useUser() || {};
  const pathname = usePathname();
  const [hashActive, setHashActive] = useState("");

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Remove the hash from the URL without reloading the page
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const navRoutes = [
    {
      label: "Home",
      address: "/",
    },
    {
      label: "Pricing",
      address: "/pricing",
    },
    {
      label: "About",
      address: "/#about",
    },
    {
      label: "Contact",
      address: "/contact",
    },
    {
      label: "Dashboard",
      address: "/dashboard",
    },
  ];

  return (
    <nav className='text-[#1973e8] bg-dark-1 shadow-lg relative flex justify-between items-center pr-2 py-5 md:p-0'>
      <div className='flex justify-between items-center container mx-auto'>
        <a
          href='/'
          className='text-center md:p-5 font-bold text-3xl text-blue-600'>
          Chat<span className=''>Vibe</span>
        </a>

        {/* desktop menu */}
        <menu className='hidden md:flex items-center gap-20 text-white font-semibold mr-6'>
          <ul className='flex gap-4'>
            {navRoutes.map(({ label, address }, index) => (
              <li
                key={index + 1}
                className={`hover:text-blue-600 transition-all ${
                  address === pathname
                    ? "text-blue-600 border-b-2 border-b-blue-600"
                    : ""
                } `}>
                <Link href={address}>{label}</Link>
              </li>
            ))}
          </ul>
        </menu>

        <div>
          {user ? (
            <div className='hidden md:block'>
              <UserButton />
            </div>
          ) : (
            <ul className=' hidden md:flex items-center gap-1 '>
              <li className=' py-2  px-4 text-xl text-white rounded-md bg-blue-500 hover:text-white  hover:scale-105 transition-all'>
                <Link href={`/sign-in`}>
                  <button>logIn</button>
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* mobile menu */}
        {/* <MobileMenu /> */}
      </div>
      <div className='md:hidden left-0 top-[72px]'>
        {/* <Sidebar /> */}
        <SmallNav />
      </div>
    </nav>
  );
};

export default Nav;
