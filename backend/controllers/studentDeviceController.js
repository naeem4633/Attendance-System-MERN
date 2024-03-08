const StudentDevice = require('../models/studentDeviceModel');

// Create a new student-device relationship
const createStudentDevice = async (req, res) => {
  try {
    const { student_id, device_id } = req.body;
    const newStudentDevice = new StudentDevice({ student_id, device_id });
    await newStudentDevice.save();
    res.status(201).json(newStudentDevice);
  } catch (error) {
    console.error('Error creating student-device relationship:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a student-device relationship
const deleteStudentDevice = async (req, res) => {
  const { student_id, device_id } = req.params;
  try {
    const deletedStudentDevice = await StudentDevice.findOneAndDelete({ student_id, device_id });
    if (!deletedStudentDevice) {
      return res.status(404).json({ error: 'Student-device relationship not found' });
    }
    res.status(200).json({ message: 'Student-device relationship deleted successfully' });
  } catch (error) {
    console.error('Error deleting student-device relationship:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all student-device relationships
const getAllStudentDevices = async (req, res) => {
  try {
    const studentDevices = await StudentDevice.find();
    res.status(200).json(studentDevices);
  } catch (error) {
    console.error('Error getting all student-device relationships:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get devices by device ID
const getDevicesByDeviceId = async (req, res) => {
    const { device_id } = req.params;
    try {
      const devices = await StudentDevice.find({ device_id });
      res.status(200).json(devices);
    } catch (error) {
      console.error('Error getting devices by device ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Get students by device ID
  const getStudentsByDeviceId = async (req, res) => {
    const { device_id } = req.params;
    try {
      const students = await StudentDevice.find({ device_id });
      res.status(200).json(students);
    } catch (error) {
      console.error('Error getting students by device ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const getDevicesByStudentId = async (req, res) => {
    const { student_id } = req.params;
  
    try {
      const studentDevices = await StudentDevice.find({ student_id });
      res.status(200).json(studentDevices);
    } catch (error) {
      console.error('Error getting devices by student ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
  createStudentDevice,
  deleteStudentDevice,
  getAllStudentDevices,
  getDevicesByStudentId,
  getStudentsByDeviceId
};
