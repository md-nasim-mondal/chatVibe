"use client";

import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import connectSocket from "@/lib/connectSocket";
import { FaArrowUp, FaPhotoVideo } from "react-icons/fa";
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
  const [allUser, setAllUser] = useState<Conversation[]>([]);
  const { socket, onlineUsers } = connectSocket();
  const { userData } = useGetRoleOrUser();
  const [results, setResults] = useState<User[]>([]);
  const [messages, setMessages] = useState<Conversation[]>([]);

  useEffect(() => {
    if (socket && userData?._id) {
      socket.on("getMessage", (data) => {
        setMessages(data?.messages);
      });
      socket.emit("sidebar", userData._id);


      socket.on("conversation", (data)=>{
        
        const conversationUserData = data.map((conversationUser:any,indx:any) => {
          if(conversationUser.sender?._id === conversationUser?.reciver?._id){
            return{
              ...conversationUser,
              userDetails: conversationUser.sender

            }
          }else if(conversationUser?.reciver?._id !== userData?._id){
            return{
              ...conversationUser,
              userDetails: conversationUser.reciver

            }
          }else{
            return{
              ...conversationUser,
              userDetails: conversationUser.sender

            }
          }
        });
        setAllUser(conversationUserData)
       
      });

      return () => {
        socket.off("conversation"); // Cleanup
      };
    }
  }, [socket, userData?._id,messages?.length]);
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
      <div className={` ${position} ${place} mt-6 p-2 w-28 md:w-80 bg-gray-900 shadow-lg rounded-lg z-50 border-2 overflow-y-auto resize-x scrollbar-custom min-h-[calc(100vh-71px)] max-h-[calc(100vh-71px)] scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scroll-smooth`}>
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
                <li key={user?._id}>
                  <Link href={`/messages/${user?._id}`}>
                    <div className="flex items-center">
                      <span className="p-2 relative">
                        <img src={user.imageUrl} alt={user.fullName} className="w-10 h-10 rounded-full hidden md:flex" />
                        <span className={`inline-block size-3 ${onlineUsers.some(online => online === user?._id) ? "bg-main-1" : "bg-gray-400"} rounded-full absolute right-2 bottom-2`}></span>
                      </span>
                      <div>
                        <h2 className="py-2 md:px-4  md:text-lg text-white">{user.firstName}</h2>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              // <li className="text-gray-600 text-center py-2">No results found</li>
              <li></li>
            )}
          </ul>
        </div>

        <ul className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2 mt-1 z-10">
          {allUser.length > 0 ? (  
            allUser.map((conv, index) => (
              <li key={index}>
                <Link href={`/messages/${conv?.userDetails?._id}`}>
                  <div className="flex items-center">
                    <span className="p-2 relative">
                      <img
                        src={conv.userDetails?.imageUrl || "/default-avatar.png"}
                        alt={conv.userDetails?.fullName || "User"}
                        className="w-10 h-10 rounded-full hidden md:flex"
                      />
                      <span className={`inline-block size-3 ${onlineUsers.some(online => online === conv.userDetails?._id) ? "bg-main-1" : "bg-gray-400"}  rounded-full absolute right-2 bottom-2`}></span>
                    </span>
                    <div className='py-2 md:px-4'>
                      <h2 className="md:text-lg text-white">
                        {conv.userDetails?.firstName || "Unknown User"}
                      </h2>
                      {
                        conv.lastMsg?.text ?   <small>{conv.lastMsg?.text || "No message available"}</small> : <FaPhotoVideo />
                      }
                    
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
