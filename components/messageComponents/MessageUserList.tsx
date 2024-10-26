'use client';

import axios from 'axios';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import connectSocket from "@/lib/connectSocket";
import { FaArrowUp } from 'react-icons/fa';
import useGetRoleOrUser from '@/hooks/apiHooks/userHooks/useGetRoleOrUser';
interface User {
  _id: string;
  emailAddresses: string;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl: string;
  role: string;
  data: object;
}

interface MessageUserListProps {
  position: string;
  place: string;
}

const MessageUserList: React.FC<MessageUserListProps> = ({ position, place }) => {
  const [conversation,setConversation] = useState([])
  // Change type to User[] (array of User objects)
 
  const {socket,onlineUsers} = connectSocket();
 const {userData}= useGetRoleOrUser()


  useEffect(()=>{
    if(socket){
      socket.emit("sidebar",userData?._id)

      socket.on("conversation",(data)=>{
       setConversation(data)
       console.log(data)
      })
    }
  },[socket,userData?._id])
// search functionality
const [query, setQuery] = useState('');
const [results, setResults] = useState<User[]>([]);

// Handle input change and fetch data based on the query
const handleInputChange = async (e: { target: { value: any; }; }) => {
  const value = e.target.value;
  setQuery(value);

  // Fetch data if query length is more than 2 characters
  if (value) {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/search?text=${value}`);
      setResults(response.data.users); // Adjust to match your data structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    setResults([]); // Clear results if query length is less than 3
  }
};
// search functionalit

  return (
    <div>
      <div
        className={` ${position} ${place} mt-6 p-2 md:w-96 bg-gray-900 shadow-lg rounded-lg z-50 border-2 overflow-y-auto resize-x  scrollbar-custom min-h-[calc(100vh-71px)] max-h-[calc(100vh-71px)] scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scroll-smooth`}
      >
       {/* Search bar */}
       <div className="relative max-w-md mx-auto my-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 text-gray-700"
        />

          <ul className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2 absolute mt-1 z-10">
          {results ? (
            results.map((user) => (
              <li key={user._id}>
                <Link href={`/messages/${user._id}`}>
                  <div className="flex items-center">
                    <span className="p-2 relative">
                      <img src={user.imageUrl} alt={user.fullName} className="w-10 h-10 rounded-full" />
                      <span className={`inline-block size-3 
                      ${onlineUsers.some(onliene => onliene === user?._id) ? "bg-main-1" : "bg-gray-400"} rounded-full absolute right-2 bottom-2`}></span>
                    </span>
                    <div>
                      <h2 className="py-2 px-4 text-lg text-white">{user.fullName}</h2>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li>No users found</li>
          )}
        </ul>
      </div>
  
      
      <p className="text-gray-600 text-xl text-center px-5  font-semibold my-5">
        Your chat history is not available. Please search  <FaArrowUp className="text-main-1 mx-2 inline animate-bounce" size={24} /> for your chatting partner.
      </p>
     
       
      </div>
    </div>
  );
};

export default MessageUserList;
