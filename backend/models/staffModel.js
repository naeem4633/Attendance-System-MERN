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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus',
    required: false
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: false
  }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
