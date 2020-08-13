var mqtt = require("mqtt");

var client = mqtt.connect("mqtt://localhost");
client.on("connect", function () {
  setInterval(function () {
    var payload  = {
      deviceID : 'AEZAMI',
      deviceName: 'test device',
      description : 'this is just a test device I am going to calculate'
    }
    
    client.publish("registerDevice",JSON.stringify(payload));
    console.log("Message Sent");
  }, 5000);
});
