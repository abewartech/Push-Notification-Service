const HyperExpress = require("hyper-express");
const webserver = new HyperExpress.Server();
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost");

webserver.post("/sendnotif", (request, response) => {
  response.send("");
  client.publish("sendnotif", "a");
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
  }
});

webserver.listen(8080);
