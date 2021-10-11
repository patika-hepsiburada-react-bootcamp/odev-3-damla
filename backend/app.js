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

const votes = [0, 0, 0, 0];

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("new-vote", votes);

  // to save vote values on the backend
  socket.on("new-vote", (index, ) => {
    console.log("New Vote:", index);
    votes[index] += 1;
    io.emit("new-vote", votes);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
