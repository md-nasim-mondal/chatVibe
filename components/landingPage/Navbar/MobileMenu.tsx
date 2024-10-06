"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { RiMenuUnfold2Line } from "react-icons/ri";

const MobileMenu = () => {
  const [display, setDisplay] = useState(false);
  return (
    <menu className="md:hidden z-30">
      {/* Add flexbox and justify-end to align the button on the right */}
      
      <div className="flex justify-end">
        <button
          onClick={() => setDisplay(!display)}
          className="bg-blue-600 font-bold text-xl text-white px-2 py-1 rounded-md"
        >
          <RiMenuUnfold2Line />
        </button>
      </div>

      <ul
        className={`${
          display ? "block" : "hidden"
        } absolute bg-blue-600 min-h-screen top-0 right-0 transition-all text-white`}
      >
        <button
          onClick={() => setDisplay(false)}
          className="hover:text-red-500 p-6 mb-6"
        >
          <ImCross className="text-2xl" />
        </button>
        <hr className="text-xl font-bold h-2 mb-3" />
        <li className="hover:text-green-500 px-6 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-green-500 px-6 transition-all">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-green-500 px-6 transition-all">
          <Link href="/contact">Contacts</Link>
        </li>
        <li className="hover:text-green-500 px-6 transition-all">
          <Link href="/pricing">Pricing</Link>
        </li>
        <hr className="mt-5" />
       <div className=" flex justify-center items-center mt-5 mx-auto">
         <UserButton />

       </div>
      
      </ul>
    </menu>
  );
};

export default MobileMenu;
