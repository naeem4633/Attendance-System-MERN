const Program = require('../models/programModel');

// Get all programs
const getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    console.error('Error getting programs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get one program by program_id
const getProgramById = async (req, res) => {
  const program_id = req.params.program_id;

  try {
    const program = await Program.findOne({ program_id: program_id });
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    res.status(200).json(program);
  } catch (error) {
    console.error('Error getting program:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new program
const createProgram = async (req, res) => {
  try {
    const newProgram = new Program(req.body);
    await newProgram.save();
    res.status(201).json(newProgram);
  } catch (error) {
    console.error('Error creating program:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a program by program_id
const deleteProgram = async (req, res) => {
  const program_id = req.params.program_id;

  try {
    const deletedProgram = await Program.findOneAndDelete({ program_id: program_id });
    if (!deletedProgram) {
      return res.status(404).json({ error: 'Program not found' });
    }
    res.status(200).json({ message: 'Program deleted successfully' });
  } catch (error) {
    console.error('Error deleting program:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllPrograms,
  getProgramById,
  createProgram,
  deleteProgram
};
