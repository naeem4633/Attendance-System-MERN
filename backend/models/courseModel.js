const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    required: true
  },
  program_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program'
  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
