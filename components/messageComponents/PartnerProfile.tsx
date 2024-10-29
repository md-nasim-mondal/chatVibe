import React from 'react'
import connectSocket from "@/lib/connectSocket";
interface User{
  _id: string;
  emailAddresses: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
}

interface PartnerProfileProps {
  user?: User; // 'user' is now optional
}
const PartnerProfile: React.FC<PartnerProfileProps>=({user})=> {
  const {socket,onlineUsers} = connectSocket();
  return (
    <div>
      <div className='flex items-center'>
              <span className="p-2 hidden md:block">
              <img src={user?.imageUrl} alt="profile image" className="w-10 h-10 rounded-full" />
              </span>
              <div className='py-2 px-4'>
                <h2 className=" text-lg">{user?.fullName}</h2>
                <p>{onlineUsers.some(onliene => onliene === user?._id) ? "online":"offline"}</p>
              </div>
            </div>
    </div>
  )
}

export default PartnerProfile