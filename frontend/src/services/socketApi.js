import { io } from "socket.io-client";

let socket;
export const connectSocket = () => {
  console.log("Connecting");
  // socket = io(process.env.REACT_APP_BACKEND_ENDPOINT, { transports: ['websocket'] });
  socket = io("http://localhost:3001", { transports: ["websocket"] });

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("connect_error", () => {
    console.error("Connection failed.");
  });
};

