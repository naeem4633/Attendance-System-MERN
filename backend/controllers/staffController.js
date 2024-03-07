const Staff = require('../models/staffModel');

const createStaff = async (req, res) => {
  try {
    // Check if staff_id, email, or contact_number already exists
    const { staff_id, email, contact_number } = req.body;
    const existingStaff = await Staff.findOne({
      $or: [
        { staff_id: staff_id },
        { email: email },
        { contact_number: contact_number }
      ]
    });
    
    if (existingStaff) {
      return res.status(400).json({ error: 'Staff with the same staff ID, email, or contact number already exists' });
    }

    // Create a new staff member
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (error) {
    console.error('Error creating staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a staff member by staff_id
const getStaff = async (req, res) => {
  const staffId = req.params.staff_id;

  try {
    const staff = await Staff.findOne({ staff_id: staffId });
    if (!staff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.status(200).json(staff);
  } catch (error) {
    console.error('Error getting staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a staff member by staff_id
const updateStaff = async (req, res) => {
  const staffId = req.params.staff_id;

  try {
    const updatedStaff = await Staff.findOneAndUpdate({ staff_id: staffId }, req.body, { new: true });
    if (!updatedStaff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.status(200).json(updatedStaff);
  } catch (error) {
    console.error('Error updating staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a staff member by staff_id
const deleteStaff = async (req, res) => {
  const staffId = req.params.staff_id;

  try {
    const deletedStaff = await Staff.findOneAndDelete({ staff_id: staffId });
    if (!deletedStaff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.status(200).json({ message: 'Staff member deleted successfully' });
  } catch (error) {
    console.error('Error deleting staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    console.error('Error getting staff:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createStaff,
  getStaff,
  updateStaff,
  deleteStaff, 
  getAllStaff
};
