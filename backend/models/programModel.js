const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  program_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  awarding_body: {
    type: String,
    required: true
  },
  department_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Department',
    required: false  
  }
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
