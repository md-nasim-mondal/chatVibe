"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Users, LayoutList } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Loader from "./Loader";
import EndCallButton from "./EndCallButton";
import { cn } from "@/lib/utils";

import { io } from "socket.io-client";
import { useUser } from "@clerk/clerk-react";
import { RxCrossCircled } from "react-icons/rx";
import { RiMessage3Fill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";
type Message = string | { [key: string]: any }| any; // Can be a string or an object

const MeetingRoom = () => {
  const socket = io("https://chatvibecahtingbackend.onrender.com");

  const [displayChat, setDisplayChat] = useState(false)

  console.log(displayChat);

  const [res, setRes] = useState<Message[]>([]); // State to store an array of messages

  const { id: meetingId } = useParams();
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  const {user} = useUser()
  // console.log(user?.username)
  // console.log(meetingId);


  useEffect(() => {
    socket.emit("join-room", meetingId);

    socket.on("messageFromServer", (mes: Message) => {
      setRes((prevRes) => [...prevRes, mes]); // Add the new message to the state
    });

    // Cleanup to avoid duplicate listeners when component unmounts
    return () => {
      socket.off("messageFromServer");
    };
  }, []);

  // console.log(res);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    const message = e.target.message.value;
    console.log(message);

    const messageObj = {message, userinfo: user?.username }

    socket.emit("sendMessage", { meetingId, messageObj });
    e.target.reset();
  };
  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}>
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      {/* video layout and call controls */}
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap ">
        <CallControls onLeave={() => router.push(`/`)} />

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
            {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  onClick={() =>
                    setLayout(item.toLowerCase() as CallLayoutType)
                  }>
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-dark-1" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
            <Users size={20} className="text-white" />
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>

      {/* chat box */}
      {displayChat && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-blue-1 p-4 rounded-md max-w-[300px]">
          <div className="relative">
            <ul className="max-h-[300px] overflow-y-scroll">
              {res.map((msg: Message, index: number) => (
                <li
                  key={index}
                  className={`${
                    user?.username === msg.userinfo
                      ? "text-right bg-dark-4 my-1 pr-4 rounded-md"
                      : "bg-gray-500 my-1 pl-4 rounded-md leading-3"
                  }`}>
                  <span className="text-[10px] font-medium">
                    {msg.userinfo === user?.username ? "You" : msg.userinfo}
                  </span>
                  <br />
                  <span className="text-xl font-bold">{msg.message}</span>
                </li>
              ))}
            </ul>
            <form onSubmit={handleSendMessage} className="flex items-center justify-center">
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="max-w-[75%] mx-auto p-2 rounded-md bg-green-950 text-white font-semibold"
              />
              <button
                type="submit"
                className="max-w-[25%] mx-auto p-2 text-xl rounded-md bg-green-900 ml-2"
              >
                <IoSend/>
                </button>
            </form>
          </div>
          <button
            onClick={() => {
              setDisplayChat(false);
            }}
            title="close"
            className="text-white text-2xl rounded-full absolute top-0 right-0 hover:scale-105 hover:bg-red-700">
            <RxCrossCircled />
          </button>
        </div>
      )}

      <button
        onClick={() => setDisplayChat(!displayChat)}
        title="Message/chat"
        className="bg-blue-1 p-1 rounded-md absolute top-2/3 right-10">
        <RiMessage3Fill className="text-2xl " />
        <span className="text-[10px]">{res ? res.length : ""}</span>
      </button>
    </section>
  );
};

export default MeetingRoom;
