"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "@/components/meetComponents/Loader";
import Select from "react-select"; // Import React-Select
import { GoDotFill } from "react-icons/go";
import { FcCancel } from "react-icons/fc";

interface User {
  _id: string;
  emailAddresses: string;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl: string;
  role: string;
  isPremium: Boolean;
}

const roleOptions = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
];

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  // Fetch users on component load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/all`
        );
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (
    userId: string,
    email: string,
    selectedOption: any
  ) => {
    const newRole = selectedOption.value;

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/updateRole?email=${email}`,
        { role: newRole }
      );

      Swal.fire({
        position: "top",
        icon: "success",
        title: "User role updated successfully!",
        showConfirmButton: false,
        timer: 1500,
        background: "#227670",
        customClass: {
          title: "white-text",
        },
      });

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
      });
    }
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
    <div className="bg-[#161925] text-white text-center">
      <h1 className="text-2xl font-bold mb-6 text-center">All Users</h1>
      <div className="max-w-sm md:max-w-full overflow-auto mx-auto">
        <table className="bg-gray-800 border-separate border-spacing-y-2 mx-auto p-8 rounded-xl">
          <thead>
            <tr className="bg-main-2 hover:bg-main-3 font-semibold">
              <th className="py-3 px-4 text-sm font-medium text-gray-300 text-center">
                #
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-300 text-center">
                Image
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-300 text-center">
                Full Name
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-300 text-center">
                Email
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-300 text-center">
                isPremium
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-300 text-center">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-[#1C1F2E] hover:text-white transition"
              >
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4 text-center">
                  <img
                    src={user.imageUrl}
                    alt={user.fullName}
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="py-2 px-4 text-sm text-center">
                  {user.fullName}
                </td>
                <td className="py-2 px-4 text-sm text-center">
                  {user.emailAddresses}
                </td>
                <td className="py-2 px-4 text-sm text-center">
                  {user?.isPremium ? <GoDotFill className="text-green-500" /> : <FcCancel />}
                </td>
                <td className="py-2 px-4 text-sm text-center">
                  <Select
                    defaultValue={roleOptions.find(
                      (option) => option.value === user.role
                    )}
                    onChange={(selectedOption) =>
                      handleRoleChange(
                        user._id,
                        user.emailAddresses,
                        selectedOption
                      )
                    }
                    options={roleOptions}
                    className="text-black mb-2 font-medium"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "white",
                        minWidth: "150px", // Set minimum width
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: "#1C1F2E", // Menu background
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused
                          ? "#227670"
                          : "#1C1F2E", // Hover effect: green background
                        color: state.isFocused ? "white" : "white", // Text color on hover
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "#324b4c", // Style for the selected value
                      }),
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
