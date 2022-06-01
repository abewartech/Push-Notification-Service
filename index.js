const express = require("express");
const app = express();
const PORT = 8080;
const HOST = "0.0.0.0";
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost");

app.get("/", (req, res) => {
  res.send("Hello World");
  client.publish("sendnotif", "Hello mqtt");
});

client.on("connect", function () {
  client.subscribe("sendnotif", function (err) {
    if (!err) {
      console.log(err);
    }
  });
});

client.on("message", function (topic, message) {
  if (topic === "sendnotif") {
    console.log(message.toString());
  }
  client.end();
});

app.listen(PORT, HOST);
console.log(`Our app running on http://${HOST}:${PORT}`);
