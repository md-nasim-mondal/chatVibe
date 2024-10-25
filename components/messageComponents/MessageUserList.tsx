'use client';

import useGetAllUsers from '@/hooks/apiHooks/userHooks/useGetAllUser';
import axios from 'axios';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
  // Change type to User[] (array of User objects)
  const [users, setUsers] = useState<User[]>([]);

  const { data, loading, error } = useGetAllUsers();

// search functionality
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

// Handle input change and fetch data based on the query
const handleInputChange = async (e: { target: { value: any; }; }) => {
  const value = e.target.value;
  setQuery(value);

  // Fetch data if query length is more than 2 characters
  if (value.length > 2) {
    try {
      const response = await axios.get(`https://api.example.com/search?query=${value}`);
      setResults(response.data); // Adjust to match your data structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    setResults([]); // Clear results if query length is less than 3
  }
};
// search functionality










  if (loading) return <div><Loader /></div>;
  if (error) return <div>Error fetching users</div>;

  return (
    <div>
      <div
        className={` ${position} ${place} mt-6 p-2 md:w-96 bg-gray-900 shadow-lg rounded-lg z-50 border-2 overflow-y-auto resize-x  scrollbar-custom max-h-[calc(100vh-71px)] scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scroll-smooth`}
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
      </div>


        <ul className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2">
          {data.length > 0 ? (
            data.map((user) => (
              <li key={user._id}>
                <Link href={`/messages/${user._id}`}>
                  <div className="flex items-center">
                    <span className="p-2 relative">
                      <img src={user.imageUrl} alt={user.fullName} className="w-10 h-10 rounded-full" />
                      <span className='inline-block bg-main-1 size-3 rounded-full absolute right-2 bottom-2'></span>
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
    </div>
  );
};

export default MessageUserList;
