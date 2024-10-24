"use client";

import Swal from "sweetalert2";
import "./style.css";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTelegram,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import SectionContainer from "@/components/landingPage/ShareComponents/SectionContainer";
import { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset any previous errors

    // Input validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.status === 200) {
        // Show success message
        Swal.fire({
          position: "top",
          icon: "success",
          title:
            "Your message has been sent successfully. We will try to connect with you as soon as possible!",
          showConfirmButton: false,
          timer: 2200,
          background: "#227670",
          customClass: {
            title: "white-text",
          },
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch (error) {
      setError("Failed to send the message. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const formVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      y: [1, 10, -10, 10, -10, 1],
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionContainer>
      <motion.div
        className='flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto'
        initial='hidden'
        animate='visible'
        variants={containerVariants}>
        {/* Left Side Form */}
        <motion.div
          className="w-full max-w-md rounded-xl p-4 py-6 md:p-8 shadow-md"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
            transition: "background-color 0.5s ease",
          }}
          variants={formVariants}
          animate={
            formData.name ||
            formData.email ||
            formData.phone ||
            formData.message
              ? "shake"
              : "visible"
          }
          whileHover={{ scale: 1.05 }} // Add a slight scaling effect on hover
        >
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 uppercase mb-4">
            Contact Us
          </h2>
          {error && <p className='text-red-500 text-center'>{error}</p>}{" "}
          {/* Display error message if exists */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-main-1 focus:border-main-1 p-2.5'
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1d4ed8")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-main-1 focus:border-main-1 p-2.5'
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1d4ed8")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700'>
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-main-1 focus:border-main-1 p-2.5'
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1d4ed8")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-main-1 focus:border-main-1 p-2.5'
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1d4ed8")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "#d1d5db")
                }></textarea>
            </div>
            <div className="flex items-center justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1, backgroundColor: "#1d4ed8" }}
                className="w-full py-2.5 px-4 text-base font-medium text-white bg-main-2 hover:bg-main-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-1"
                whileTap={{ scale: 0.95 }} // Add a scaling effect when clicked
              >
                Submit
              </motion.button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600 lg:font-semibold">
              For any inquiries, please feel free to contact us.
            </p>
            <p className="text-xs text-gray-600 lg:font-semibold">
              We will get back to you as soon as possible.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex md:flex-col items-center justify-center w-full gap-2 md:flex-1">
          <div className="h-px md:h-52 w-full md:w-px bg-main-1"></div>
          <h3 className="text-3xl text-white">Or</h3>
          <div className="h-px md:h-52 w-full md:w-px bg-main-1"></div>
        </div>

        {/* Social Links and Contact Info */}
        <motion.div
          className='flex flex-col gap-4 items-center md:items-start text-white'
          variants={containerVariants}>
          <h3 className='text-3xl font-medium capitalize'>
            Visit our social pages
          </h3>
          <motion.div className='text-4xl flex gap-4 text-main-1'>
            {[
              <FaFacebookSquare />,
              <FaInstagramSquare />,
              <FaTwitterSquare />,
              <FaLinkedinIn />,
            ].map((icon, index) => (
              <motion.a
                href='#'
                whileHover={{ scale: 1.2, color: "#0ea5e9" }} // Change the color on hover
                key={index}>
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default Page;
