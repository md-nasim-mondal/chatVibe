'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

// Define a User type based on your user data structure
interface User {
  _id: string;
  emailAddresses: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
}

// Custom hook to fetch all users
const useGetRoleOrUser = () => {

    const { isLoaded, isSignedIn, user } = useUser();
    const email = user?.emailAddresses[0]?.emailAddress;





  const [data, setData] = useState<User[] >([]);   // State to hold user data
  const [role, setRole] = useState<User[] |"">("");   // State to hold user data
  const [loading, setLoading] = useState<boolean>(true);   // State to show loading status
  const [error, setError] = useState<string | null>(null); // State to hold any errors

  useEffect(() => {
    // Asynchronous function to fetch users
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/one?email=${email}`);
        setData(res.data);  // Set data to state
      } catch (err) {
        console.error("Error fetching users", err);
        setError("Error fetching users");
      } finally {
        setLoading(false);  // Disable loading after the fetch is done
      }
    };

    // Call the fetch function when the component mounts
    if(email){
         fetchUsers(); 
    }
  }, []);

  // Return data, loading, and error
  return { data,loading,error};
}

export default useGetRoleOrUser