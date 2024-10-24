'use client';
import Loader from "@/components/meetComponents/Loader";
import ChattingPlace from "@/components/messageComponents/ChattingPlace";
import PartnerProfile from "@/components/messageComponents/PartnerProfile";
import useGetOneUser from "@/hooks/apiHooks/userHooks/useGetOneUser";
import useGetRoleOrUser from "@/hooks/apiHooks/userHooks/useGetRoleOrUser";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Params {
  id: string;
  user: object;
}

function Page() {
  const [userId, setUserId] = useState<string | null>(null);
  const { id } = useParams() as unknown as Params; // Type assertion for `useParams`
  
  // Fetch user data using the custom hook
  const { user, loading, error } = useGetOneUser(id);
  
  // Fetch the sender's data using useGetRoleOrUser
  const { userData } = useGetRoleOrUser();

  // Ensure userData is fetched only once
  useEffect(() => {
    if (userData?._id) {
      setUserId(userData._id);
    }
  }, [userData]);

  if (loading) return <div><Loader /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Pass user data to the PartnerProfile component */}
      {/*<PartnerProfile user={user} /> *}
      
      {/* Pass partner and senderId to the ChattingPlace component */}
      {/* <ChattingPlace partner={user} senderId={userId} /> */} 
    </div>
  );
}

export default Page;
