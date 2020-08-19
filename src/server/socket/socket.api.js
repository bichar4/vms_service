import socket from 'socket.io';
var mqtt = require("mqtt");

var client = mqtt.connect("mqtt://localhost");

var io = socket();
var socketApi = {};

socketApi.io = io;

export const emitDeviceData = function(deviceData){
    io.emit('setReading',deviceData)
}

io.on('connection',(socket)=>{
    console.log("Connected to Socket!!"+socket.id);

    socket.on('test',(msg)=>{
        console.log("Random requested has been recieved")
    })

    socket.on('getReading',(deviceInfo) =>{
        console.log("recieved a 'getReading topic from socket")
        console.log(deviceInfo)
        client.publish('getReading',JSON.stringify(deviceInfo))
    })
})
export default {
    socketApi
}