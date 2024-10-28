"use client";

import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import connectSocket from "@/lib/connectSocket";
import { FaArrowUp } from "react-icons/fa";
import useGetRoleOrUser from "@/hooks/apiHooks/userHooks/useGetRoleOrUser";
import debounce from "lodash/debounce";

// Define the User interface
interface User {
  _id: string;
  emailAddresses: string;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl: string;
  role: string;
  data: object;
  text: string;
}

// Define Conversation interface
interface Conversation {
  _id: string;
  userDetails: User;
  lastMsg: { text: string };
  reciver: User;
 sender : User;
}

interface MessageUserListProps {
  position: string;
  place: string;
}

const MessageUserList: React.FC<MessageUserListProps> = ({ position, place }) => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const { socket, onlineUsers } = connectSocket();
  const { userData } = useGetRoleOrUser();
  const [results, setResults] = useState<User[]>([]);

  useEffect(() => {
    if (socket && userData?._id) {
      socket.emit("sidebar", userData._id);

      const conversationListener = (data: any[]) => {
        const conversationUserData = data.map((conversationData: any) => {
          const userDetails =
            conversationData?.sender?._id === conversationData.reciver ? conversationData.sender :
            conversationData?.reciver._id !== userData._id ? conversationData.reciver :
            conversationData.sender;

          return {
            ...conversationData,
            userDetails,
          };
        });
        setConversation(conversationUserData);
      };

      socket.on("conversation", conversationListener);

      return () => {
        socket.off("conversation", conversationListener); // Cleanup
      };
    }
  }, [socket, userData?._id]);

  // Debounced input handler
  const handleInputChange = useCallback(
    debounce(async (value: string) => {
      if (value.length > 2) {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/search?text=${value}`
          );
          setResults(response.data.users || []);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setResults([]);
      }
    }, 500),
    []
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleInputChange(e.target.value);
  };

  return (
    <div>
      <div className={` ${position} ${place} mt-6 p-2 md:w-96 bg-gray-900 shadow-lg rounded-lg z-50 border-2 overflow-y-auto resize-x scrollbar-custom min-h-[calc(100vh-71px)] max-h-[calc(100vh-71px)] scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scroll-smooth`}>
        {/* Search bar */}
        <div className="relative max-w-md mx-auto my-2">
          <input
            type="text"
            onChange={onInputChange}
            placeholder="Search here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 text-gray-700"
          />
          <ul className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2 absolute mt-1 z-10">
            {results.length > 0 ? (
              results.map((user) => (
                <li key={user._id}>
                  <Link href={`/messages/${user._id}`}>
                    <div className="flex items-center">
                      <span className="p-2 relative">
                        <img src={user.imageUrl} alt={user.fullName} className="w-10 h-10 rounded-full" />
                        <span className={`inline-block size-3 ${onlineUsers.some(online => online === user._id) ? "bg-main-1" : "bg-gray-400"} rounded-full absolute right-2 bottom-2`}></span>
                      </span>
                      <div>
                        <h2 className="py-2 px-4 text-lg text-white">{user.fullName}</h2>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-gray-600 text-center py-2">No results found</li>
            )}
          </ul>
        </div>

        <ul className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2 mt-1 z-10">
          {conversation.length > 0 ? (
            conversation.map((conv, index) => (
              <li key={index}>
                <Link href={`/messages/${conv.sender?._id}`}>
                  <div className="flex items-center">
                    <span className="p-2 relative">
                      <img
                        src={conv.userDetails?.imageUrl || "/default-avatar.png"}
                        alt={conv.userDetails?.fullName || "User"}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className={`inline-block size-3 ${onlineUsers.some(online => online === conv.reciver?._id) ? "bg-main-1" : "bg-gray-400"}  rounded-full absolute right-2 bottom-2`}></span>
                    </span>
                    <div className='py-2 px-4'>
                      <h2 className="text-lg text-white">
                        {conv.userDetails?.fullName || "Unknown User"}
                      </h2>
                      <small>{conv.lastMsg?.text || "No message available"}</small>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-xl text-center px-5 font-semibold my-5">
              Your chat history is not available. Please search <FaArrowUp className="text-main-1 mx-2 inline animate-bounce" size={24} /> for your chatting partner.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MessageUserList;
