'use client';
import { useEffect, useRef, useState } from "react";
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
  imageUrl?: string;
  videoUrl?: string;
  msgByUserId: string;
}

interface ChattingPlaceProps {
  partner: Partner | undefined;
  senderId: string;
}

const ChattingPlace: React.FC<ChattingPlaceProps> = ({ partner, senderId }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  // Reference to the bottom of the message container
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { id: receiverId } = useParams();
  const { socket, onlineUsers } = connectSocket();
  
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  // Handle receiving messages from the server
  useEffect(() => {
    if (socket) {
      socket.emit("message Page", { sender: senderId, reciver: receiverId });
      socket.on("getMessage", (data) => {
        setMessages(data?.messages);
      });

      return () => {
        socket.off("getMessage");
      };
    }
  }, [socket, senderId, receiverId, messages]);

  // Scroll to the bottom of the messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages?.length]);

  // Send message
  const handleSendMessage = () => {
    if (message.trim() || previewUrl) {
      if (socket) {
        socket.emit('new message', {
          sender: senderId,
          reciver: receiverId,
          text: message,
          imageUrl: file?.type.startsWith('image') ? previewUrl : '',
          videoUrl: file?.type.startsWith('video') ? previewUrl : '',
          msgByUserId: senderId,
        });
      }
      setMessage("");
      setFile(null);
      setPreviewUrl(null);
    }
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        alert("File size should not exceed 10MB");
        return;
      }
      
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div>
      <div className="bg-gray-900 p-4 rounded-xl shadow-lg mx-auto relative">
        <div className="h-[60vh] bg-gray-800 rounded-xl p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scroll-smooth">
          {/* Display chat messages */}
          {messages?.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className={`text-gray-300 mx-3 my-2 text-lg font-semibold ${msg.msgByUserId === senderId ? "text-right" : ""}`}>
                <div className={`inline-block py-2 rounded-xl px-4 text-center ${msg.msgByUserId === senderId ? "bg-green-900" : "bg-gray-900"}`}>
                  <h3>{msg.text}</h3>
                  {msg.imageUrl && <img src={msg.imageUrl} alt="Preview" className="w-full max-w-xs rounded mt-2" />}
                  {msg.videoUrl && (
                    <video controls src={msg.videoUrl} className="w-full max-w-xs rounded mt-2" />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center my-5">No messages yet...</div>
          )}
          {/* Scroll reference div */}
          <div ref={messagesEndRef} />

             {/* Show preview for selected file */}
        {previewUrl && (
          <div className="mt-3 text-gray-300 absolute left-2/4 bottom-20 -translate-x-2/4 mx-auto">
            {file?.type.startsWith("image") ? (
              <img src={previewUrl} alt="Preview" className="w-3/4 max-w-xs rounded mt-2" />
            ) : (
              <video controls src={previewUrl} className="w-3/4 max-w-xs rounded mt-2" />
            )}
          </div>
        )}
        </div>

     

        {/* Message input and send button */}
        <div className="mt-4 flex items-center space-x-3">
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*,video/*"
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
      </div>
    </div>
  );
};

export default ChattingPlace;
