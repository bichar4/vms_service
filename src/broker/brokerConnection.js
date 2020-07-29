import mosca from 'mosca';

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
   })
}
