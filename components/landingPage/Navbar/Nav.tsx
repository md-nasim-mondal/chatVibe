"use client";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { UserButton, useUser } from "@clerk/nextjs";
import Sidebar from "./Sidebar";
import SmallNav from "./SmallNav";
function Nav() {
  const { user, isLoaded } = useUser() || {};

  console.log(user);

  return (
    <nav className="text-[#1973e8] bg-dark-1 shadow-lg relative flex justify-between items-center pr-2 md:pl-0 py-5 md:py-0">
      <div className="flex justify-between items-center container mx-auto">
        <a
          href="/"
          className="text-center md:p-5 font-bold text-3xl text-blue-600"
        >
          Chat<span className="">Vibe</span>
        </a>

        {/* desktop menu */}
        <menu className="hidden md:flex items-center gap-20 text-white font-semibold mr-6">
          <ul className="flex gap-4">
            <li className="hover:text-blue-600 transition-all ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-blue-600 transition-all ">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:text-blue-600 transition-all ">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="hover:text-blue-600 transition-all ">
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li className="hover:text-blue-600 transition-all ">
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </menu>

        <div>
          {user ? (
            <div className="hidden md:block">

              <UserButton />

            </div>
          ) : (
            <ul className=" hidden md:flex items-center gap-1 ">
              <li className=" py-2  px-4 text-xl text-white rounded-md bg-blue-500 hover:text-white  hover:scale-105 transition-all">
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
      <div className="md:hidden left-0 top-[72px]">
        {/* <Sidebar /> */}
        <SmallNav />
      </div>
    </nav>
  );
}

export default Nav;
