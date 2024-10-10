"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "@/components/meetComponents/Loader";
import "./style.css";

interface User {
  _id: string;
  emailAddresses: string;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl: string;
  role: string;
}

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/all`);
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChangeFrontend = (userId: string, newRole: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, role: newRole } : user
      )
    );

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Your message has been sent successfully",
      showConfirmButton: false,
      timer: 1500,
      background: "#227670",
      customClass: {
        title: "white-text",
      },
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[#161925] text-white p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">All Users</h1>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full table-auto bg-gray-800 border-x-main-2">
          <thead>
            <tr className="border-b bg-main-2">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">
                #
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">
                Image
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">
                Full Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">
                Email
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-b hover:bg-[#1C1F2E] hover:text-white transition"
              >
                <td className="py-2 px-4 text-sm">{index + 1}</td>
                <td className="py-2 px-4">
                  <img
                    src={user.imageUrl}
                    alt={user.fullName}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-2 px-4 text-sm">{user.fullName}</td>
                <td className="py-2 px-4 text-sm">{user.emailAddresses}</td>
                <td className="py-2 px-4 text-sm">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChangeFrontend(user._id, e.target.value)
                    }
                    className="bg-gray-700 text-white rounded px-2 py-1"
                  >
                    <option value="user">User</option>
                    <option value="premiumUser">Premium User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsiveness CSS */}
      <style jsx>{`
        table {
          width: 100%;
        }

        @media (max-width: 768px) {
          table {
            font-size: 12px;
          }
          th,
          td {
            padding: 8px;
          }
        }

        @media (max-width: 480px) {
          table {
            font-size: 10px;
          }
          th,
          td {
            padding: 6px;
          }
          .w-10 {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default ManageUsers;
