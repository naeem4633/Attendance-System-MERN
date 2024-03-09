const PersonDevice = require('../models/personDeviceModel');
const Student = require('../models/studentModel');
const Staff = require('../models/staffModel');
const Device = require('../models/deviceModel'); 

// Create a new person-device relationship
const createPersonDevice = async (req, res) => {
    try {
      // Check if person (student or staff) exists
      const { person_id, person_type, registration_type, device_id, unique_identifier } = req.body;
      let person;
  
      // Check if the unique identifier already exists
      const existingPersonDevice = await PersonDevice.findOne({ unique_identifier });
      if (existingPersonDevice) {
        return res.status(400).json({ error: 'Duplicate unique identifier' });
      }
  
      if (person_type === 'student') {
        person = await Student.findOne({ student_id: person_id });
      } else if (person_type === 'staff') {
        person = await Staff.findOne({ staff_id: person_id });
      }
      if (!person) {
        return res.status(404).json({ error: 'Person is neither a student nor staff' });
      }
  
      // Create a new person-device relationship
      const newPersonDevice = new PersonDevice({ person_id, person_type, registration_type, device_id, unique_identifier });
      await newPersonDevice.save();
      res.status(201).json(newPersonDevice);
    } catch (error) {
      console.error('Error creating person-device relationship:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// Delete a person-device relationship
const deletePersonDevice = async (req, res) => {
    const { person_id, device_id } = req.params;
    try {
        const deletedPersonDevice = await PersonDevice.findOneAndDelete({ person_id, device_id });
        if (!deletedPersonDevice) {
        return res.status(404).json({ error: 'Person-device relationship not found' });
        }
        res.status(200).json({ message: 'Person-device relationship deleted successfully' });
    } catch (error) {
        console.error('Error deleting person-device relationship:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all person-device relationships
const getAllPersonDevices = async (req, res) => {
  try {
    const personDevices = await PersonDevice.find();
    res.status(200).json(personDevices);
  } catch (error) {
    console.error('Error getting all person-device relationships:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const updatePersonDevice = async (req, res) => {
    try {
        const { person_id, device_id } = req.params;
        const updateData = req.body;
        
        // Find the person device by person_id and device_id and update it
        const updatedPersonDevice = await PersonDevice.findOneAndUpdate({ person_id, device_id }, updateData, { new: true });
        if (!updatedPersonDevice) {
        return res.status(404).json({ error: 'Person-device relationship not found' });
        }
        
        res.status(200).json(updatedPersonDevice);
    } catch (error) {
        console.error('Error updating person-device relationship:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const getPersonsByDeviceId = async (req, res) => {
    try {
      const { device_id } = req.params;
      
      // Find all persons for the device ID
      const personDevices = await PersonDevice.find({ device_id });
      const personIds = personDevices.map(pd => pd.person_id);
  
      // Find the persons using the personIds array
      const students = await Student.find({ student_id: { $in: personIds } });
      const staffs = await Staff.find({ staff_id: { $in: personIds } });
      
      res.status(200).json({ students, staffs });
    } catch (error) {
      console.error('Error getting persons by device ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};
  
const getDevicesByPersonId = async (req, res) => {
    try {
      const { person_id } = req.params;
      
      // Find all devices for the person ID
      const personDevices = await PersonDevice.find({ person_id });
      const deviceIds = personDevices.map(pd => pd.device_id);
  
      // Find the devices using the deviceIds array
      const devices = await Device.find({ device_id: { $in: deviceIds } });
      
      res.status(200).json(devices);
    } catch (error) {
      console.error('Error getting devices by person ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};
  

module.exports = {
  createPersonDevice,
  deletePersonDevice,
  getAllPersonDevices,
  updatePersonDevice,
  getPersonsByDeviceId,
  getDevicesByPersonId
};
