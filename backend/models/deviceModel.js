const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  device_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  contains_rfid: {
    type: Boolean,
    default: false
  },
  contains_facial_recognition: {
    type: Boolean,
    default: false
  },
  contains_biometric: {
    type: Boolean,
    default: false
  }
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
