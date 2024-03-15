const mongoose = require('mongoose');

const manualOverrideSchema = new mongoose.Schema({
  device_id: {
    type: String,
    required: true
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    default: null
  }
});

const ManualOverride = mongoose.model('ManualOverride', manualOverrideSchema);

module.exports = ManualOverride;