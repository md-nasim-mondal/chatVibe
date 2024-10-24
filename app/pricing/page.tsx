"use client";
import SectionContainer from "@/components/landingPage/ShareComponents/SectionContainer";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <div data-aos="fade-up" className="bg-gradient-to-b h-[460px] from-[#227670] to-[#111024] rounded-lg p-6 text-white shadow-lg flex flex-col justify-between ">
          <div className="bg-pink-500 text-white rounded-full text-center py-1 px-4 w-fit mx-auto">
            <span className="font-bold uppercase text-sm">Starter</span>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold">
              $0<span className="text-sm font-light">/mon</span>
            </h1>
          </div>

          <ul className="space-y-2 ">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">100 Minutes Video Call</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">0.5 GB Storage</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">High-Quality Video</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">Multi-User Calls</span>
            </li>
          </ul>

          <div className="text-center mt-4">
            <Link href="dashboard"><button className="mb-4 px-4 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300">
                      Free 
                    </button></Link>
          
          </div>
        </div>

        <div data-aos="fade-up" className="bg-gradient-to-b h-[460px] from-[#227670] to-[#111024] rounded-lg p-6 text-white shadow-lg flex flex-col justify-between ">
          <div className="bg-pink-500 text-white rounded-full text-center py-1 px-4 w-fit mx-auto">
            <span className="font-bold uppercase text-sm">Standard</span>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold">
              $19<span className="text-sm font-light">/mon</span>
            </h1>
          </div>

          <ul className="space-y-2 ">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">500 Minutes Video Call</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">10 GB Storage</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">High-Quality Video</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">Multi-User Calls</span>
            </li>
          </ul>

          <div className="text-center mt-4">
          <Link href="/payment?price=19">
                    <button className="mb-4 px-4 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300">
                      Buy Now
                    </button>
                  </Link>
          </div>
        </div>

        <div data-aos="fade-up" className="bg-gradient-to-b h-[460px] from-[#227670] to-[#111024] rounded-lg p-6 text-white shadow-lg flex flex-col justify-between ">
          <div className="bg-pink-500 text-white rounded-full text-center py-1 px-4 w-fit mx-auto">
            <span className="font-bold uppercase text-sm">Premium</span>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold">
              $49<span className="text-sm font-light">/mon</span>
            </h1>
          </div>

          <ul className="space-y-2 ">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">Unlimited Video Call</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">100 GB Storage</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">High-Quality Video</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">Multi-User Calls</span>
            </li>
          </ul>

          <div className="text-center mt-4">
          <Link href="/payment?price=49">
                    <button className="mb-4 px-2 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300">
                      Buy Now
                    </button>
                  </Link>
          </div>
        </div>


      </div>



    </SectionContainer>
  );
};

export default Page;
