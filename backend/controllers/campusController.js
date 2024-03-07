// campusController.js

const Campus = require('../models/campusModel');

// Get all campuses
const getAllCampuses = async (req, res) => {
  try {
    const campuses = await Campus.find();
    res.status(200).json(campuses);
  } catch (error) {
    console.error('Error getting campuses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a campus by campus_id
const getCampusById = async (req, res) => {
  const campus_id = req.params.campus_id;

  try {
    const campus = await Campus.findOne({ campus_id: campus_id });
    if (!campus) {
      return res.status(404).json({ error: 'Campus not found' });
    }
    res.status(200).json(campus);
  } catch (error) {
    console.error('Error getting campus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new campus
const createCampus = async (req, res) => {
  try {
    const newCampus = new Campus(req.body);
    await newCampus.save();
    res.status(201).json(newCampus);
  } catch (error) {
    console.error('Error creating campus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a campus by campus_id
const deleteCampus = async (req, res) => {
  const campus_id = req.params.campus_id;

  try {
    const deletedCampus = await Campus.findOneAndDelete({ campus_id: campus_id });
    if (!deletedCampus) {
      return res.status(404).json({ error: 'Campus not found' });
    }
    res.status(200).json({ message: 'Campus deleted successfully' });
  } catch (error) {
    console.error('Error deleting campus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllCampuses,
  getCampusById,
  createCampus,
  deleteCampus
};
