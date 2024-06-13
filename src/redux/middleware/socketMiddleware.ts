import { MiddlewareAPI, Dispatch, Action } from "@reduxjs/toolkit";
import { SOCKET_EVENT } from "@/utils/Constant";
import { setStoreRequestCount } from "../slice/storeRequestSlice";
import Toast from "@/utils/Toast";
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initializeSocket = (store: MiddlewareAPI<Dispatch<Action>>): Socket => {
  if (!socket) {
    socket = io(import.meta.env.VITE_BASE_URL!, {
      withCredentials: true,
      transports: ["websocket"],
    });

    socket.on(SOCKET_EVENT.CONNECT, () => {
      console.log("Socket connected");
    });

    socket.on(
      SOCKET_EVENT.NEW_STORE_REQUEST,
      ({ userName, storeName }: { storeName: string; userName: string }, ack) => {
        console.log("New store request received");
        Toast(`New store request from ${userName} for ${storeName}`, "info");
        store.dispatch(setStoreRequestCount());
        if (ack) ack(true);
      }
    );

    socket.on(SOCKET_EVENT.DISCONNECT, () => {
      console.log("Socket disconnected");
    });
  }

  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const socketMiddleware = (store: MiddlewareAPI<Dispatch<Action>>) => {
  return (next: Dispatch<Action>) => (action: Action) => {
    initializeSocket(store);
    return next(action);
  };
};
