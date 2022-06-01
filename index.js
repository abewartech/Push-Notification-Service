const express = require("express");
const app = express();
const PORT = 8080;
const HOST = "0.0.0.0";
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "CLIENT",
  brokers: ["localhost:9093"]
});

const producer = kafka.producer();

app.post("/sendnotif", async (req, res) => {
  res.send("OK");

  await producer.connect();
  await producer.send({
    topic: "sendnotif",
    messages: [{ value: "a" }]
  });

  await producer.disconnect();
});

app.listen(PORT, HOST);
console.log(`Our app running on http://${HOST}:${PORT}`);
