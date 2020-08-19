var mqtt = require("mqtt");
import { REGISTER_DEVICE, TEST } from "../utils/topic-constants";
import { addNewDevice } from "../server/device/services/device.service";
import {emitDeviceData} from "../server/socket/socket.api";
export const initializeDeviceManger = () => {
  var client = mqtt.connect("mqtt://localhost");

  client.on("connect", function () {
    client.subscribe(REGISTER_DEVICE);
    client.subscribe(TEST);
    client.subscribe("setReading")
  });

  client.on("message", function (topic, message) {
    console.log("topic");
    switch (topic) {
      case REGISTER_DEVICE:
        console.log("device registration request recieved");
        var context = JSON.parse(message.toString());
        try {
          addNewDevice(context);
        } catch (err) {
          console.log(err);
        }
        break;
      case TEST:
        console.log(JSON.parse(message.toString()));
        break;
      case "setReading":
        console.log("mqtt req recieved on topic setReading")
        emitDeviceData(JSON.parse(message.toString()));
    }
  });

};
