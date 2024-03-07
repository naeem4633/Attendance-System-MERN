const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus'
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
