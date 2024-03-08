const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  staff_id: {
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
  campus_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Campus',
    required: false
  },
  department_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Department',
    required: false
  },
  designation: {
    type: String,
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
  }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
