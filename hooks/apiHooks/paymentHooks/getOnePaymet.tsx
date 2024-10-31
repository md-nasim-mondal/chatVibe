"use client";

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

// Define the structure of the expected API response
interface APIResponse {
  user: User;
  role: string;
  paymentHistory: Array<User & { amount: number }>; // Payment history with amount included
}

// Custom hook to fetch user data and role based on email
const useOnePayment = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const email = user?.emailAddresses[0]?.emailAddress; // Get the user's email if available

  const [userData, setUserData] = useState<User | null>(null); // State for user data
  const [amount, setAmount] = useState<number | null>(null); // State for payment amount
  const [role, setRole] = useState<string>(""); // State for user role
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status
  const [error, setError] = useState<string | null>(null); // State for errors

  useEffect(() => {
    // Async function to fetch user data and role
    const fetchUserAndRole = async () => {
      if (!email) return;

      setLoading(true);
      setError(null);

      try {
        const res = await axios.get<APIResponse>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/getHistoryOne`,
          { params: { email } }
        );

        // Set user data and payment amount if payment history is not empty
        if (res.data.paymentHistory.length > 0) {
          setUserData(res.data.paymentHistory[0]);
          setAmount(res.data.paymentHistory[0].amount);
        }
        
      } catch (err) {
        console.error("Error fetching user data and role:", err);
        setError("Failed to fetch user data and role");
      } finally {
        setLoading(false);
      }
    };

    // Only fetch data if user is signed in and email is available
    if (isLoaded && isSignedIn && email) {
      fetchUserAndRole();
    }
  }, [isLoaded, isSignedIn, email]);

  return { userData, amount, role, loading, error };
};

export default useOnePayment;
