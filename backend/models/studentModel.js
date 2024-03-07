const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact_number: {
    type: String,
    required: true
  },
  program_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program',
    required: false
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: false
  },
  campus_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus',
    required: false
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

