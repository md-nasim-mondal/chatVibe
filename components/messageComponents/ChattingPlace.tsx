'use client'
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { motion } from "framer-motion";

const ChattingPlace = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  

  const handleSendMessage = () => {
    if (message.trim() || file) {
      // Add logic to send message or file
      console.log("Message Sent: ", message);
      if (file) console.log("File Sent: ", file);
      setMessage("");
      setFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
   <div>
     <div className="bg-gray-900 p-4 rounded-xl shadow-lg   mx-auto">
      <div className="h-[60vh] bg-gray-800 rounded-xl p-4 overflow-y-auto">
        {/* Placeholder for the chat messages */}
        <div className="text-gray-400 text-center my-5">No messages yet...</div>
      </div>

      <div className="mt-4 flex items-center space-x-3 ">
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
