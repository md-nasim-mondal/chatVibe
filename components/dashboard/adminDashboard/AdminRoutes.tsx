import { adminSidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AdminRoutes = () => {
  const pathname = usePathname();
  return (
    <>
      {adminSidebarLinks?.map((link) => {
        const isActive = pathname === link?.route;
        return (
          <Link
            href={link?.route}
            key={link?.label}
            className={cn(
              "flex gap-4 items-center p-4 rounded-lg justify-start",
              {
                "bg-main-2": isActive,
              }
            )}>
            <Image
              src={link?.imgUrl}
              alt={link?.label}
              width={24}
              height={24}
            />

            <p className='text-lg font-semibold '>{link?.label}</p>
          </Link>
        );
      })}
    </>
  );
};

export default AdminRoutes;
