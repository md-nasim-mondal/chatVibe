import ManageUsers from "@/components/dashboard/adminDashboard/ManageUsers";
import AdminProtected from "@/components/protectedRoute/AdminProtected";
import React from "react";

const page = () => {
  return (
    <AdminProtected>
      <ManageUsers />
    </AdminProtected>
  );
};

export default page;
