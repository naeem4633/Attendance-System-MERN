const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  awarding_body: {
    type: String,
    required: true
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
