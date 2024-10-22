'use client';
import Loader from "@/components/meetComponents/Loader";
import ChattingPlace from "@/components/messageComponents/ChattingPlace";
import PartnerProfile from "@/components/messageComponents/PartnerProfile";
import useGetOneUser from "@/hooks/apiHooks/userHooks/useGetOneUser";
import { useParams } from "next/navigation";
import { useEffect } from "react";

interface Params {
  id: string;
}

function Page() {
  const { id } = useParams() as unknown as Params; // Type assertion for `useParams` output

  // Fetch user data using the custom hook
  const { user, loading, error } = useGetOneUser(id);

  if (loading) return <div><Loader /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <PartnerProfile user={user} /> {/* Pass user data to components */}
      <ChattingPlace  partner={user} />  {/* Pass user data to components */}
    </div>
  );
}

export default Page;
