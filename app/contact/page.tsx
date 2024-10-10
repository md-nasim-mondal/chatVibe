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

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Your message has been sent successfully",
      showConfirmButton: false,
      timer: 1500,
      background: "#9a9ae2",
      customClass: {
        title: "white-text",
      },
    });
  };




  return (
    <SectionContainer>
      <div className='flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto'>
        <div
          className='w-full max-w-md rounded-xl p-4 py-6 md:p-8 shadow-md'
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
            transition: "background-color 0.5s ease", // Smooth transition for color changes
          }}>
          <h2 className='text-center text-2xl md:text-3xl font-extrabold text-gray-900 uppercase mb-4'>
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                autoComplete='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-main-1 focus:border-main-1 p-2.5'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-main-1 focus:border-main-1 p-2.5'
              />
            </div>
            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700'>
                Phone number
              </label>
              <input
                id='phone'
                name='phone'
                type='tel'
                autoComplete='tel'
                value={formData.phone}
                onChange={handleChange}
                required
                className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-indigo-500 focus:border-main-1 p-2.5'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-main-1 focus:border-main-1 p-2.5'></textarea>
            </div>
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='w-full py-2.5 px-4 text-base font-medium text-white bg-main-2 hover:bg-main-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-1'>
                Submit
              </button>
            </div>
          </form>
          <div className='mt-6 text-center'>
            <p className='text-xs text-gray-600 lg:font-semibold'>
              For any inquiries, please feel free to contact us.
            </p>
            <p className='text-xs text-gray-600 lg:font-semibold'>
              We will get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className='flex md:flex-col items-center justify-center w-full gap-2 md:flex-1'>
          <div className='h-px md:h-52 w-full md:w-px bg-main-1'></div>
          <h3 className='text-3xl text-white'>Or</h3>
          <div className='h-px md:h-52 w-full md:w-px bg-main-1'></div>
        </div>
        <div className='flex flex-col gap-4 items-center md:items-start text-white'>
          <h3 className={`text-3xl font-medium capitalize`}>
            Visit our social pages
          </h3>
          <div className={`text-4xl flex gap-4 text-main-1`}>
            <a href='#'>
              <FaFacebookSquare />
            </a>
            <a href='#'>
              <FaInstagramSquare />
            </a>
            <a href='#'>
              <FaTwitterSquare />
            </a>
            <a href='#'>
              <FaLinkedinIn />
            </a>
          </div>
          <h3 className={`text-3xl font-medium`}>Chat With Us</h3>
          <div className={`text-4xl flex gap-4 text-main-1`}>
            <a href='#'>
              <FaFacebookMessenger />
            </a>
            <a href='#'>
              <FaWhatsappSquare />
            </a>
            <a href='#'>
              <FaTelegram />
            </a>
          </div>
          <div>
            <h3 className='text-3xl font-medium'>Call Our Hot-Lines</h3>
            <a className='text-3xl' href='#'>
              01699308-485
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Page;
