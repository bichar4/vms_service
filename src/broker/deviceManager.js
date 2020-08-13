var mqtt = require("mqtt");
import {REGISTER_DEVICE} from '../utils /topic-constants';
import {addNewDevice} from '../server/device/services/device.service';

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
        try {
            addNewDevice(context)
        }catch(err){
            console.log(err)
        }
        break;
    }
  });
};
