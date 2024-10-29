'use client'
import { SignUp, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";
import Loader from "../meetComponents/Loader";
import useGetAllUsers from "@/hooks/apiHooks/userHooks/useGetAllUser";

export default function Signup() {
  const { isLoaded, isSignedIn, user } = useUser();

  const {data:users} = useGetAllUsers();

  const isUserExists = user?.emailAddresses
  ? !!users?.find(u => u?.emailAddresses === user.emailAddresses[0]?.emailAddress)
  : undefined;

  // Save user to the database once signed up and user data is loaded
  useEffect(() => {
    const saveUserToDB = async () => {
      if (user) {
        const { emailAddresses, firstName, lastName, fullName, imageUrl } = user;
        const userData = {
          emailAddresses,
          firstName,
          lastName,
          fullName,
          imageUrl,
        };
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/save-user`, userData);

          // if (res.status === 201) {
          //   console.log("User saved to MongoDB");
          // }
        } catch (error) {
          console.error("Error saving user to DB", error);
        }
      }
    };

    if (isLoaded && user && !isUserExists) {
      saveUserToDB();
    }
  }, [isLoaded, user, isUserExists]);

  // Show a loader while the user data is loading
  if (!isLoaded) {
    return <Loader />;
  }

  // If the user is signed in, show a different page or message
  if (isSignedIn) {
    return <div>You are already signed in</div>;
  }

  // If the user is not signed in, show the SignUp component
  return <SignUp />;
}
