import Device, {
  findAllDevice,
  findDeviceById,
  createDevice,
  deleteAllDevice,
} from "../models/device.model";

export const checkDuplicate = async function (id) {
  const response = await findDeviceById(id);
  if (response) {
    throw new Error("The device with given registration id already exists");
  }
  return true;
};

export const getAllDevices = async function () {
  const response = await findAllDevice();
  return response;
};

export const addNewDevice = async function (device) {
  try {
    await checkDuplicate(device._id);
    const createdDevice = await createDevice(device);
    return {
      message: "Device was created",
      payload: createdDevice,
    };
  } catch (err) {
    throw new Error(err);
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
