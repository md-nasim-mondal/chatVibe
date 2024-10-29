"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  // const meetingEndTime = 3600000;
  const meetingEndTime = 10000;
  const isPremium = false;

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
    if (isPremium) {
      return;
    }
    setTimeout(() => {
      endCall();
    }, meetingEndTime);
  }, []);

  return (
    <Button onClick={endCall} className="bg-red-500">
      End call for everyone
      <span></span>
    </Button>
  );
};

export default EndCallButton;
