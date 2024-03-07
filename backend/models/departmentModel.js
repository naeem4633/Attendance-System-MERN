const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  },
  head_of_department: {
    type: mongoose.Schema.Types.String,
    ref: 'Staff'
  }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
