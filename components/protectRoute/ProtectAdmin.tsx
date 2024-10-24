"use client";
import React, { ReactNode, useEffect } from "react";
import useGetRoleOrUser from "@/hooks/apiHooks/userHooks/useGetRoleOrUser";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import Loader from "../meetComponents/Loader";

interface ProtectAdminProps {
  children: ReactNode;
}

const ProtectAdmin: React.FC<ProtectAdminProps> = ({ children }) => {
  const { role, loading } = useGetRoleOrUser();
  const router = useRouter();
  const { signOut } = useClerk();

  if(loading) return <Loader/>

  // If role is not 'admin', do not render the children
  if (role !== "admin" && !loading) {
    signOut();
    router.push("/");
    return null;
  }

  return <>{children}</>;
};

export default ProtectAdmin;
