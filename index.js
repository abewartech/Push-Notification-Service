const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const HOST = "0.0.0.0";
// const { Kafka } = require("kafkajs");

// const kafka = new Kafka({
//   clientId: "CLIENT",
//   brokers: ["localhost:9093"]
// });

// const producer = kafka.producer();

app.post("/sendnotif", async (req, res) => {
  res.send("");

  // await producer.connect();
  // await producer.send({
  //   topic: "sendnotif",
  //   messages: [{ value: "a" }]
  // });

  // await producer.disconnect();
});

var server = app.listen(PORT, HOST);

app.use(cors());
var socket = require("socket.io");
let io = socket(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

console.log(`Our app running on http://${HOST}:${PORT}`);
