import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';

// Define the type for your socket hook
const connectSocket = (): Socket<DefaultEventsMap, DefaultEventsMap> | null => {
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);

  useEffect(() => {
    // Use http://localhost:5000/ as the server URL
    const serverUrl = 'http://localhost:5000';
    
    // Create a new Socket.IO connection
    const socketIo = io(serverUrl);

    // Set the socket connection in the state
    setSocket(socketIo);

    // Cleanup the connection when the component unmounts
    return () => {
      socketIo.disconnect();
      setSocket(null); // Reset socket to null on disconnect
    };
  }, []); // Empty dependency array to run only on component mount

  return socket; // Return the socket instance
};

export default connectSocket;
