import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  /* options */
});

app.get("/", (req, res) => {
  res.end("realtime voting app");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  // socket.emit("new-color", activeColor);

  // socket.on("new-color", (color) => {
  //   console.log("New Color:", color);

  //   io.emit("new-color", color);
  //   activeColor = color;
  // });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
