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
    type: mongoose.Schema.Types.String,
    ref: 'Program',
    required: false
  },
  department_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Department',
    required: false
  },
  campus_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Campus',
    required: false
  },
  rfid: {
    type: String,
    required: false
  },
  facial_signature: {
    type: String,
    required: false
  },
  biometric_profile: {
    type: String,
    required: false
  },
  keypad_unique_key: {
    type: String,
    required: false
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

