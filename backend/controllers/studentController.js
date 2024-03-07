const Student = require('../models/studentModel');

// Controller to create a new student
const createStudent = async (req, res) => {
  const { student_id, name, email, contact_number, program_id, department_id, campus_id } = req.body;

  try {
    // Check if the student already exists
    const existingStudent = await Student.findOne({ $or: [{ email }, { contact_number }, { student_id }] });
    if (existingStudent) {
      return res.status(400).json({ error: 'Student with this email, contact number, or student ID already exists' });
    }

    // Create a new student
    const newStudent = new Student({ student_id, name, email, contact_number, program_id, department_id, campus_id });
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getStudent = async (req, res) => {
  const studentId = req.params.student_id; 

  try {
    const student = await Student.findOne({ student_id: studentId });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error('Error getting student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
  
const deleteStudent = async (req, res) => {
  const studentId = req.params.student_id;

  try {
    // Find and delete the student by student_id
    const deletedStudent = await Student.findOneAndDelete({ student_id: studentId });
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateStudent = async (req, res) => {
  const studentId = req.params.student_id;
  const updatedStudentData = req.body;

  try {
    // Find and update the student by student_id
    const updatedStudent = await Student.findOneAndUpdate({ student_id: studentId }, updatedStudentData, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error getting students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent,
  getAllStudents
};
