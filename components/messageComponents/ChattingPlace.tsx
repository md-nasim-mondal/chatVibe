'use client';
import { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { motion } from "framer-motion";
import connectSocket from "@/lib/connectSocket";
import { useParams } from "next/navigation";

interface Partner {
  _id: string;
  emailAddresses: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
}

interface Message {
  text: string;
  imageUrl: string;
  videoUrl: string;
  msgByUserId: string;
}

interface ChattingPlaceProps {
  partner: Partner;
  senderId: string;
}

const ChattingPlace: React.FC<ChattingPlaceProps> = ({ partner, senderId }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  // Get receiverId from the URL params
  const { id: receiverId } = useParams();

  // Connect to the socket server
  const  socket  = connectSocket();
  // Handle receiving messages from the server
useEffect(() => {
  if (socket) {
    socket.on("getMessage", (data) => {
      console.log('Received conversation data:', data);
       setMessages(data); // Update the state with new messages
    });

    return () => {
      socket.off("getMessage"); // Correct event name for cleanup
    };
  }
}, [socket]);


  // Send message
  const handleSendMessage = () => {
    if (message.trim()) {
      if (socket) {
        // Emit the new message to the server
        socket.emit('new message', {
          sender: senderId,
          reciver: receiverId,
          text: message,
          imageUrl: '',
          videoUrl: '',
          msgByUserId: senderId
        });
      }

      setMessage("");
      setFile(null);
    }
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="bg-gray-900 p-4 rounded-xl shadow-lg mx-auto">
        <div className="h-[60vh] bg-gray-800 rounded-xl p-4 overflow-y-auto">
          {/* Display the chat messages */}
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="text-gray-300 mb-2">
                {msg.text}
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center my-5">No messages yet...</div>
          )}
        </div>

        <div className="mt-4 flex items-center space-x-3">
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600"
              >
                <AiOutlinePaperClip size={24} />
              </motion.div>
            </label>
          </div>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 text-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none transition duration-300"
          >
            <FiSend size={24} />
          </motion.button>
        </div>

        {file && (
          <div className="mt-3 text-gray-300">
            <p>Selected File: {file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChattingPlace;
