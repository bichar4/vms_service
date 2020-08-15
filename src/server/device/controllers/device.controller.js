import * as deviceServices from "./../services/device.service";
import httpStatus from "http-status-codes";

export const getAllDevices = async function (req, res, next) {
  try {
    const response = await deviceServices.getAllDevices();
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    next({
      status: httpStatus.EXPECTATION_FAILED,
      message: error,
    });
  }
};

export const addNewDevice = async function (req, res, next) {
  let deviceData = req.body;
  try {
    const response = await deviceServices.addNewDevice(deviceData);
    return res.status(httpStatus.CREATED).json(response);
  } catch (err) {
    next({
      status: httpStatus.EXPECTATION_FAILED,
      message: err.message,
    });
  }
};

export const deleteAllDevice = async function (req, res, next) {
  try {
    const response = await deviceServices.deleteAllDevices();
    return res.status(httpStatus.OK), json(response);
  } catch (err) {
    next({
      status: httpStatus.EXPECTATION_FAILED,
      messge: err.message,
    });
  }
};
