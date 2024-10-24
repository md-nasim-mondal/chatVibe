import Statistics from "@/components/dashboard/adminDashboard/Statistics";
import AdminProtected from "@/components/protectedRoute/AdminProtected";
import React from "react";

const page = () => {
  return (
    <AdminProtected>
      <Statistics />
    </AdminProtected>
  );
};

export default page;
