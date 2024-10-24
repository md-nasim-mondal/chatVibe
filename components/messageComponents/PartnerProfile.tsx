import React from 'react'

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
  
  return (
    <div>
      <div className='flex items-center'>
              <span className="p-2 hidden md:block">
              <img src={user?.imageUrl} alt="profile image" className="w-10 h-10 rounded-full" />
              </span>
              <div>
                <h2 className="py-2 px-4 text-lg">{user?.fullName}</h2>
              </div>
            </div>
    </div>
  )
}

export default PartnerProfile
