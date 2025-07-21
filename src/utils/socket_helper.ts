import { User } from "@/types/loggedin_user.type";
import { io, Socket } from "socket.io-client";

export let socket: Socket;

export const initiateSocketConnection = (user: User) => {
  socket = io(`${process.env.REACT_APP_SOCKET_URL}`, {
    auth: {
      token: user && user,
    },
  });
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};
