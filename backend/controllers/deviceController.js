const Device = require('../models/deviceModel');

// Get all devices
const getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (error) {
    console.error('Error getting devices:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a device by device_id
const getDeviceById = async (req, res) => {
  const deviceId = req.params.device_id;

  try {
    const device = await Device.findOne({ device_id: deviceId });
    if (!device) {
      return res.status(404).json({ error: 'Device not found' });
    }
    res.status(200).json(device);
  } catch (error) {
    console.error('Error getting device:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new device
const createDevice = async (req, res) => {
  try {
    const newDevice = new Device(req.body);
    await newDevice.save();
    res.status(201).json(newDevice);
  } catch (error) {
    console.error('Error creating device:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a device by device_id
const updateDevice = async (req, res) => {
  const deviceId = req.params.device_id;

  try {
    const updatedDevice = await Device.findOneAndUpdate({ device_id: deviceId }, req.body, { new: true });
    if (!updatedDevice) {
      return res.status(404).json({ error: 'Device not found' });
    }
    res.status(200).json(updatedDevice);
  } catch (error) {
    console.error('Error updating device:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a device by device_id
const deleteDevice = async (req, res) => {
  const deviceId = req.params.device_id;

  try {
    const deletedDevice = await Device.findOneAndDelete({ device_id: deviceId });
    if (!deletedDevice) {
      return res.status(404).json({ error: 'Device not found' });
    }
    res.status(200).json({ message: 'Device deleted successfully' });
  } catch (error) {
    console.error('Error deleting device:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllDevices,
  getDeviceById,
  createDevice,
  updateDevice,
  deleteDevice
};
