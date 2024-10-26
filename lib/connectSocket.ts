import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useParams } from 'next/navigation';

// Define the type for the socket hook's return value
interface UseSocketReturn {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | null;
  onlineUsers:[]; // Adjust type according to your use case
}

// Custom hook for socket connection
const useSocket = (): UseSocketReturn => {
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<[]>([]);
  const { id } = useParams();

  useEffect(() => {
    // Define the server URL
    const serverUrl = 'http://localhost:5000';

    // Create a new Socket.IO connection
    const socketIo = io(serverUrl, {
      auth: {
        user: id,
      },
    });

    // Handle online user updates
    socketIo.on("onlineUser", (data) => {
      setOnlineUsers(data); // Update the state with online users
    });

    // Set the socket connection in the state
    setSocket(socketIo);

    // Cleanup the connection when the component unmounts
    return () => {
      socketIo.disconnect();
      setSocket(null); // Reset socket to null on disconnect
    };
  }, [id]); // Include 'id' as a dependency to reconnect if it changes

  return { socket, onlineUsers }; // Return the socket instance and online users
};

export default useSocket;
