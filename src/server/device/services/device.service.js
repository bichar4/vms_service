import Device, {
  findAllDevice,
  findDeviceById,
  createDevice,
  deleteAllDevice,
} from "../models/device.model";

export const getAllDevices = async function () {
  const response = await findAllDevice();
  return response;
};

export const addNewDevice = async function (device) {
  try {
    const createdDevice = await createDevice(device);
    return {
      message: "Device was created",
      payload: createdDevice,
    };
  } catch (err) {
    throw new Error("Device couldnot be created");
  }
};

export const deleteAllDevices = async function () {
  try {
    const response = await deleteAllDevice();
    return {
      message: "The device collection is cleared",
    };
  } catch (err) {
    throw new Error("Devices couldnot be deleted");
  }
};
