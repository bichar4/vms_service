import { Schema, model as Model } from "mongoose";

const deviceSchema = new Schema({
  _id:{
    type:String,
    required:true
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
  state: {
    type: String,
    enum: ["idle","measured","update"],
  },
  config:[{

  }],
  deviceName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  attributes: [
    {
      name: String,
      measurementType: String,
      unit: String 
    },
  ],
});

const DeviceModel = Model("Device", deviceSchema);
export default DeviceModel;

export async function findAllDevice(){
    return DeviceModel.find().catch((err) =>{
        throw err;
    });
}

export async function createDevice(deviceData){
    const newDevice = new DeviceModel(deviceData);
    await newDevice.save().catch((err)=>{
        throw err;
    });
    return newDevice;
}

export async function findDeviceById(id){
    return DeviceModel.findOne({_id:id}).catch((err)=>{
        throw err
    })
}

export async function deleteDevice(id){
    return DeviceModel.findByIdAndDelete(id).catch((err)=>{
        throw err
    })
}

export async function deleteAllDevice(){
  return DeviceModel.remove({}).catch((err)=>{
    throw err
  })
}

