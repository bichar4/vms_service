var mqtt = require("mqtt");

export const initializeDeviceManger = () => {
  var client = mqtt.connect("mqtt://localhost");

  client.on("connect", function () {
    client.subscribe("registerDevice");
  });

  client.on("message", function (topic, message) {
    switch (topic) {
      case "registerDevice":
        console.log("device registration request recieved");
        var context = message.toString();
        console.log(context);
      break;
    }
  });
};
