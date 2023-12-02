const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5001;
const { Server } = require("ws");

const server = express()
  .use(express.static(path.join(__dirname, "dist")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (data) => {
    if (wss.clients.size) {
      wss.clients.forEach((client, i) => {
        client.send(data);
      });
    }
  });

  ws.on("error", (error) => {
    console.log("error", error);
  });

  ws.on("close", () => console.log("Client disconnected"));
});
