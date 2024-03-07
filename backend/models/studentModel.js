const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
    ref: 'Program'
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },
  campus_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus'
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
