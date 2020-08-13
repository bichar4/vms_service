var mqtt = require("mqtt");
import {REGISTER_DEVICE} from '../utils /topic-constants';
export const initializeDeviceManger = () => {
  var client = mqtt.connect("mqtt://localhost");

  client.on("connect", function () {
    client.subscribe(REGISTER_DEVICE);
  });

  client.on("message", function (topic, message) {
    switch (topic) {
      case REGISTER_DEVICE:
        console.log("device registration request recieved");
        var context = JSON.parse(message.toString());
        console.log(context.deviceID);
        break;
    }
  });
};
