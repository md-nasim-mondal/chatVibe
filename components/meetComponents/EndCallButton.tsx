"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useGetRoleOrUser from "@/hooks/apiHooks/userHooks/useGetRoleOrUser";

const EndCallButton = () => {
  const { userData } = useGetRoleOrUser();

  const call = useCall();
  const router = useRouter();

  // const meetingEndTime = 3600000;
  const meetingEndTime = 10000;

  if (!call)
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );

  // https://getstream.io/video/docs/react/guides/call-and-participant-state/#participant-state-3
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.push("/dashboard");
  };

  useEffect(() => {
    if (userData?.isPremium) {
      return;
    }

    alert("Your meeting time 10s")
    setTimeout(() => {
      endCall();
    }, meetingEndTime);
  }, [userData]);

  return (
    <Button onClick={endCall} className="bg-red-500">
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
