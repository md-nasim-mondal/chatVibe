'use client';

import useGetAllUsers from '@/hooks/apiHooks/userHooks/useGetAllUser';
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
  const [users, setUsers] = useState<User[]>([]);

  const { data, loading, error } = useGetAllUsers();

  // Use useEffect to update users when data is available
  useEffect(() => {
    if (data) {
      setUsers(data); // Only set users if data is available
    }
  }, [data]); // Depend on data to avoid unnecessary renders

  if (loading) return <div><Loader /></div>;
  if (error) return <div>Error fetching users</div>;

  return (
    <div>
      <div
        className={` ${position} ${place} mt-6 p-2 md:w-96 bg-gray-900 shadow-lg rounded-lg z-50 border-2 overflow-y-scroll max-h-[calc(100vh-71px)]`}
      >
        <ul className="min-w-full table-auto bg-gray-800 border-separate border-spacing-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id}>
                <Link href={`/messages/${user._id}`}>
                  <div className="flex items-center">
                    <span className="p-2 hidden md:block">
                      <img src={user.imageUrl} alt={user.fullName} className="w-10 h-10 rounded-full" />
                    </span>
                    <div>
                      <h2 className="py-2 px-4 text-lg">{user.fullName}</h2>
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
