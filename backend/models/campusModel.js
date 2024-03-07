const mongoose = require('mongoose');

const campusSchema = new mongoose.Schema({
  campus_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  },
  manager_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Staff',
    required: false
  }
});

const Campus = mongoose.model('Campus', campusSchema);

module.exports = Campus;
