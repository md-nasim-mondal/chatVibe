"use client";
import { useEffect, useState } from "react";
import { RiHomeGearFill } from "react-icons/ri";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { GiMoneyStack, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { Tooltip } from "react-tooltip";
import logo from "../assets/logo.png";
import { getColorForInitial } from "@/utilities/colorGenerator";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const { user } = useUser() || {};
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure this component is only rendered after client-side hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Get color for user's initial
  //   const color = getColorForInitial(user?.firstName?.charAt(0) || "X");

  if (!isMounted) {
    // Avoid rendering until after hydration
    return null;
  }

  // Helper function for sidebar menu classes
  const sideBarClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-orange-900 font-bold flex items-center gap-2"
      : "hover:text-orange-900 transition-all duration-700 flex items-center gap-2 font-semibold";

  const sidebarMenus = [
    { icon: <RiHomeGearFill className="text-3xl" />, link: "/", title: "Home" },
    {
      icon: <GiMoneyStack className="text-3xl" />,
      link: "/pricing",
      title: "Pricing",
    },
    {
      icon: <GiReceiveMoney className="text-3xl" />,
      link: "/about",
      title: "About",
    },
    {
      icon: <GiTakeMyMoney className="text-3xl" />,
      link: "/contact",
      title: "Contact",
    },
  ];

  return (
    <div className="relative">
      {/* Sidebar control */}
      <IoIosArrowDropleftCircle
        className={`absolute cursor-pointer top-6 md:top-7 w-6 md:w-7 text-4xl transition-all duration-1000 z-50 ${
          !openSidebar ? "rotate-180 block" : "hidden"
        }`}
        onClick={() => setOpenSidebar(true)}
      />

      <div
        className={`${
          openSidebar ? "w-48 md:w-64" : "-translate-x-5"
        } h-screen whitespace-nowrap p-2 pt-6 relative transition-all duration-300 shadow-md shadow-orange-300`}
      >
        <IoIosArrowDropleftCircle
        className={`absolute cursor-pointer top-1 md:top-7 w-6 md:w-7 text-4xl transition-all duration-1000 z-50 right-4 ${
          !openSidebar ? "rotate-180 hidden":"block"
        }`}
        onClick={() => setOpenSidebar(false)}
      />
        <Tooltip anchorSelect=".userName" place="bottom-end">
          {user?.firstName || "No User"}
        </Tooltip>

        {/* Profile */}
        {/* {user?.role !== "admin" ? (
        <Link href="/profile">
          <div className="flex gap-2 items-center">
            <div
              className={`userName rounded-full aspect-square w-9 md:w-10 border-2 transition-all duration-700 flex items-center justify-center font-bold text-white text-lg ${
                openSidebar && "rotate-[360deg]"
              }`}
              style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
            >
              <span className="block">{user?.firstName?.charAt(0).toUpperCase() || "X"}</span>
            </div>
            <div
              className={`text-white overflow-x-hidden flex-1 origin-left font-medium transition-all duration-700 ${
                !openSidebar && "opacity-0 -translate-x-full overflow-hidden w-0"
              }`}
            >
              <h3 className="text-sm md:text-xl text-ellipsis">{user?.firstName || "No User"}</h3>
              <h4 className="text-xs first-letter:capitalize">Profile</h4>
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex gap-2 items-center">
          <img
            src={logo.src}
            alt={user?.firstName || "Admin"}
            className={`bg-[#ffffffbf] border p-[1px] userName transition-all transform duration-500 text-4xl w-8 md:w-9 h-8 md:h-9 rounded-full ${
              openSidebar && "rotate-[360deg]"
            }`}
          />
          <div
            className={`text-white overflow-x-hidden flex-1 origin-left font-medium transition-all duration-700 ${
              !openSidebar && "opacity-0 -translate-x-full overflow-hidden w-0"
            }`}
          >
            <h3 className="text-sm md:text-xl text-ellipsis">{user?.firstName || "Admin"}</h3>
            <h4 className="text-xs first-letter:capitalize">Admin</h4>
          </div>
        </div>
      )} */}
        <hr className="my-4" />

        {/* Sidebar menu items */}
        <ul className="flex flex-col gap-4 items-start">
          {sidebarMenus.map((menu, index) => (
            <Link
              href={menu.link}
              key={index}
              onClick={() => setOpenSidebar(false)}
            >
              {/* {menu.icon} */}
              <h3
                className={`${
                  !openSidebar &&
                  "opacity-0 -translate-x-full overflow-hidden w-0"
                } text-sm md:text-xl origin-left whitespace-pre transition-all duration-700`}
              >
                {menu.title}
              </h3>
            </Link>
          ))}
        </ul>
        <hr className="my-4" />

        {/* <UserButton /> */}
      </div>
    </div>
  );
};

export default Sidebar;