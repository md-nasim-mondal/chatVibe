'use client';

import axios from 'axios';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import connectSocket from "@/lib/connectSocket";
import { FaArrowUp } from 'react-icons/fa';
import useGetRoleOrUser from '@/hooks/apiHooks/userHooks/useGetRoleOrUser';

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
  text : string;
 
}

// Define Conversation interface
interface Conversation {
  _id: string;
  userDetails: User; // Ensure each conversation has `userDetails` of type `User`
  lastMsg : User;
  reciver : User;
}

interface MessageUserListProps {
  position: string;
  place: string;
}

const MessageUserList: React.FC<MessageUserListProps> = ({ position, place }) => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const { socket, onlineUsers } = connectSocket();
  const { userData } = useGetRoleOrUser();

  // // Use useEffect to update users when data is available
  // useEffect(() => {
  //   if (data) {
  //     setUsers(data); // Only set users if data is available
  //   }
  // }, [data]); // Depend on data to avoid unnecessary renders

  // if (loading) return <div><Loader /></div>;
  // if (error) return <div>Error fetching users</div>;

  return (
    <div>
      {/* <div
        className={` ${position} ${place} mt-6 p-2 md:w-96 bg-gray-900 shadow-lg rounded-lg z-50 border-2 overflow-y-scroll max-h-[calc(100vh-71px)]`}
      >
        <ul className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id}>
                <Link href={`/messages/${user._id}`}>
                  <div className="flex items-center">
                    <span className="p-2 relative">
                      <img
                        src={conv.userDetails?.imageUrl || "/default-avatar.png"} // Fallback for imageUrl
                        alt={conv.userDetails?.fullName || "User"}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className={`inline-block size-3 ${onlineUsers.some(online => online === conv._id) ? "bg-main-1" : "bg-gray-400"}  rounded-full absolute right-2 bottom-2`}></span>
                    </span>
                    <div className='py-2 px-4'>
                      <h2 className=" text-lg text-white">
                        {conv.userDetails?.fullName || "Unknown User"}
                      </h2>
                      <small>{conv.lastMsg.text}</small>
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