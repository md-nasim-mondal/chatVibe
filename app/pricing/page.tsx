"use client";
import SectionContainer from "@/components/landingPage/ShareComponents/SectionContainer";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <SectionContainer>
      <div className="container mx-auto p-6 overflow-x-auto text-white">
        <table className="w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead className="mb-12">
            <motion.tr
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <th></th>
              <th
                scope="col"
                className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="px-2 text-lg font-medium">Starter</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl">0$</span>
                    <span className="font-medium">/mon</span>
                  </p>
                  <button
                    disabled
                    className="mb-4 px-4 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300"
                  >
                    Free
                  </button>
                </motion.div>
              </th>
              <th
                scope="col"
                className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="px-2 text-lg font-medium">Standard</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">
                      19$
                    </span>
                    <span className="font-medium">/mon</span>
                  </p>
                  {/* <Link href="/payment?price=19">
                    <button className="mb-4 px-2 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300">
                      Buy Now
                    </button>
                  </Link> */}
                </motion.div>
              </th>
              <th
                scope="col"
                className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="px-2 text-lg font-medium">Premium</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl">49$</span>
                    <span className="font-medium dark:text-gray-600">/mon</span>
                  </p>
                  <Link href="/payment?price=49">
                    <button className="mb-4 px-2 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300">
                      Buy Now
                    </button>
                  </Link>
                </motion.div>
              </th>
            </motion.tr>
          </thead>
          <tbody className="space-y-6 text-center divide-y mt-12  dark:divide-gray-300">
            {[
              {
                title: "Video Call Minutes",
                values: ["100 min", "500 min", "Unlimited"],
              },
              { title: "Storage", values: ["0.5 GB", "10 GB", "100 GB"] },
              { title: "High-Quality Video", values: [true, true, true] },
              { title: "Multi-User Calls", values: [false, true, true] },
            ].map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover:bg-[#227670] transition duration-300 ease-in-out"
              >
                <th scope="row" className="text-left">
                  <h3 className="py-3 pl-2 ">{row.title}</h3>
                </th>
                {row.values.map((value, i) => (
                  <td key={i}>
                    {typeof value === "boolean" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-label={value ? "Included" : "Not included"}
                        className="w-5 h-5 mx-auto"
                      >
                        <path
                          fillRule="evenodd"
                          d={
                            value
                              ? "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              : "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          }
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <span className="block text-sm">{value}</span>
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="bg-gradient-to-b h-[460px] from-[#227670] to-[#111024] rounded-lg p-6 text-white shadow-lg flex flex-col justify-between ">
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
            <button className="bg-[#227670] hover:bg-blue-950 text-white py-2 px-6 rounded-full font-semibold transition disabled duration-300">
              Free
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-b h-[460px] from-[#227670] to-[#111024] rounded-lg p-6 text-white shadow-lg flex flex-col justify-between ">
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


      </div>



    </SectionContainer>
  );
};

export default Page;
