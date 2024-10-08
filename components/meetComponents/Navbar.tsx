"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { table } from "console";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={`/`} className="flex items-center gap-1">
        <Image
          src={`/images/logo.png`}
          width={32}
          height={32}
          alt="Chat Vibe"
          className="max-sm:size-10"
        />
        <p
          className="text-[26px] font-extrabold bg-clip-text text-transparent max-sm:hidden"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #14B8A6, #12A193, #10A0B0)",
          }}>
          ChatVibe
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* Clerk - {User Management} */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
