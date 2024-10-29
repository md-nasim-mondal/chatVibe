import React from 'react';

interface NotificationProps {
  position: string;
  place: string;
}

const Notification: React.FC<NotificationProps> = ({ position, place }) => {
  return (
    <div className={`fixed ${position} ${place} mt-6 p-4 md:w-80 bg-gray-800 shadow-xl rounded-lg z-50 border border-gray-700 overflow-y-auto min-h-[20vh] max-h-[50vh] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent`}>
      {/* Header */}
      {/* <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">Notifications</h3>
        <button className="text-gray-400 hover:text-gray-300" aria-label="Close">
          ×
        </button>
      </div> */}
      
      {/* Notifications List */}
      {/* <div className="space-y-4">
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600 text-white">
          <p className="font-medium">You have a new message!</p>
          <span className="text-sm text-gray-400">Just now</span>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600 text-white">
          <p className="font-medium">Your order has been shipped.</p>
          <span className="text-sm text-gray-400">2 hours ago</span>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600 text-white">
          <p className="font-medium">Update available for your app.</p>
          <span className="text-sm text-gray-400">1 day ago</span>
        </div>
      </div> */}
      
      {/* No Notifications */}
        <div className="text-gray-500 text-center mt-4">
          No new notifications. Check back later!
        </div>
    </div>
  );
}

export default Notification;
