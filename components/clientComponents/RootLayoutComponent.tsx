"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Nav from "../landingPage/Navbar/Nav";
import CustomContainer from "../landingPage/ShareComponents/CustomContainer";

const RootLayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = ["/", "/pricing", "/about", "/contact"];
  const pathName = usePathname();
  return (
    <>
      {path?.includes(pathName) ? (
        <>
          <header>
            <Nav />
          </header>
          <CustomContainer>
            <main className='py-12'>{children}</main>
          </CustomContainer>
        </>
      ) : (
        <>
          <div>{children}</div>
        </>
      )}
    </>
  );
};

export default RootLayoutComponent;
