const mongoose = require('mongoose');

const personDeviceSchema = new mongoose.Schema({
  person_id: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  person_type: {
    type: String,
    required: true,
    enum: ['student', 'staff']
  },
  registration_type: {
    type: String,
    required: true
  },
  device_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Device',
    required: true
  },
  unique_identifier: {
    type: String,
    unique: true
  }
});

const PersonDevice = mongoose.model('PersonDevice', personDeviceSchema);

module.exports = PersonDevice;
