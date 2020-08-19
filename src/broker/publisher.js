var mqtt = require("mqtt");

var client = mqtt.connect("mqtt://localhost");

function setRandomData(){
  var payload = {
    _id:'AEZAKMI1',
    deviceName:'test device',
    attributes:[
      {
        name:'Temperature',
        value:29.0
      },
      {
        name:'Hearbeat',
        value:77.0
      }
    ]
  }
  return payload
}
client.on("connect", function () {
  setTimeout(function () {
    var payload  = {
      _id : 'AEZAMI1',
      deviceName: 'test device',
      description : 'this is just a{ test device I am going to calculate',
      attributes:[
        {
         name:'Temperature',
         measurementType:'Input',
         unit:'degreeC' 
        },
        {
          name:'Hearbeat',
          measurementType:'Input',
          unit:'beats/sec' 
         }
      ]
    }
    //client.publish("registerDevice",JSON.stringify(payload));
    console.log("Message Sent");
  }, 2000);

client.subscribe('getReading')
});

client.on("message", function (topic, message) {
  console.log("from publisher",JSON.parse(message))
  client.publish("setReading",JSON.stringify(setRandomData()))
});
