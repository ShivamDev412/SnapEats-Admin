import { RootState } from "@/redux/Store";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io, { Socket } from "socket.io-client";

interface SocketContextType {
  socket: Socket | null;
}
type SocketProviderProps = {
  children: React.ReactNode;
};
const SocketContext = createContext<SocketContextType>({ socket: null });
export const useSocket = () => useContext(SocketContext);
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { token } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    const newSocket = io("http://localhost:4000", {
      auth: {
        token: token,
      },
      withCredentials: true,
      transports: ["websocket"],
    })
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
