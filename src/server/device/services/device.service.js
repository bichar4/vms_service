import Device,{findAllDevice,findDeviceById,createDevice,deleteDevice}from '../models/device.model';

export const getAllDevices = async function(){
    const response = await findAllDevice();
    return response;
}

export const addNewDevice = async function(device){
    console.log(device)
}