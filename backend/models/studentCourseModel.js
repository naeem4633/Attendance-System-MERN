const mongoose = require('mongoose');

const studentCourseSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Student'
  },
  course_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Course'
  }
});

const StudentCourse = mongoose.model('StudentCourse', studentCourseSchema);

module.exports = StudentCourse;