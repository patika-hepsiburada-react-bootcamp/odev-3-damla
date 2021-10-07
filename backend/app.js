import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

app.get("/", (req, res) => {
  res.end("realtime voting app");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => console.log("a user disconnected"));
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
