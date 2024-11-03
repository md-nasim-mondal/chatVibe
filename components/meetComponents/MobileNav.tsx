"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import useGetRoleOrUser from "@/hooks/apiHooks/userHooks/useGetRoleOrUser";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggleBtn from "../dashboard/ToggleBtn";
import AdminRoutes from "../dashboard/adminDashboard/AdminRoutes";
import UserRoutes from "../dashboard/userDashboard/UserRoutes";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const { userData, role, loading } = useGetRoleOrUser();
  const [toggle, setToggle] = useState<string>("user");

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={`/icons/hamburger.svg`}
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side={`left`} className="border-none bg-dark-1">
          <Link href={`/`} className="flex items-center gap-1">
            <Image
              src={`/images/logo.png`}
              width={32}
              height={32}
              alt="Chat Vibe"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">ChatVibe</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto ">
            <SheetClose>
              <section className="flex h-full flex-col gap-6 pt-16 text-white ">
                {userData?.emailAddresses && (
                  <>
                    {role === "admin" ? (
                      <>
                        <div className="py-6">
                          <ToggleBtn setToggle={setToggle} toggle={toggle} />
                        </div>
                        <div>
                          {toggle === "admin" ? (
                            <>
                              <AdminRoutes />
                            </>
                          ) : (
                            <>
                              <UserRoutes />
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <UserRoutes />
                      </>
                    )}
                  </>
                )}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
