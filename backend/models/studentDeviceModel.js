const mongoose = require('mongoose');

const studentDeviceSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Student',
    required: true
  },
  device_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Device',
    required: true
  }
});

const StudentDevice = mongoose.model('StudentDevice', studentDeviceSchema);

module.exports = StudentDevice;