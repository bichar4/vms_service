import mosca from 'mosca';
import {addNewDevice} from '../server/device/services/device.service';

const pubsubsettings = {
    type:'mongo',
    url: process.env.DB_LOCATION,
    pubsubCollection:'ascoltatori',
    mongo:{}
};

const moscaSettings = {
    port:1883,
    backend:pubsubsettings
};

export const brokerConnect = () => {
   var server =  new mosca.Server(moscaSettings);
   server.on('ready',()=>{
       console.log('Mosca server is up and running')
       server.subscribe('registerMyDevice')
   })

   server.on("message", function (topic, message) {
    context = message.toString();
    console.log("I got the topic",topic)
    console.log(context);
  });
}
