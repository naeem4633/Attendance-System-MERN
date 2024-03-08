const Course = require('../models/courseModel');
const StudentCourse = require('../models/studentCourseModel');  
const Student = require('../models/studentModel');

// Create a new student-course relationship
const createStudentCourse = async (req, res) => {
  try {
    const newStudentCourse = new StudentCourse(req.body);
    await newStudentCourse.save(); 
    res.status(201).json(newStudentCourse);
  } catch (error) {
    console.error('Error creating student-course relationship:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a student-course relationship
const deleteStudentCourse = async (req, res) => {
  const { student_id, course_id } = req.params;

  try {
    const deletedStudentCourse = await StudentCourse.findOneAndDelete({ student_id, course_id });
    if (!deletedStudentCourse) {
      return res.status(404).json({ error: 'Student-course relationship not found' });
    }
    res.status(200).json({ message: 'Student-course relationship deleted successfully' });
  } catch (error) {
    console.error('Error deleting student-course relationship:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllStudentCourses = async (req, res) => {
  try {
    const studentCourses = await StudentCourse.find();
    res.status(200).json(studentCourses);
  } catch (error) {
    console.error('Error getting all student-course relationships:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCoursesByStudentId = async (req, res) => {
  const { student_id } = req.params;

  try {
    // Find all courses for the student
    const studentCourses = await StudentCourse.find({ student_id });
    const course_ids = studentCourses.map(sc => sc.course_id);

    // Find the courses using the course_ids array
    const courses = await Course.find({ course_id: { $in: course_ids } });

    res.status(200).json(courses);
  } catch (error) {
    console.error('Error getting courses by student ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getStudentsByCourseId = async (req, res) => {
  const { course_id } = req.params;

  try {
    // Find all students for the course
    const studentCourses = await StudentCourse.find({ course_id });
    const student_ids = studentCourses.map(sc => sc.student_id);

    // Find the courses using the course_ids array
    const students = await Student.find({ student_id: { $in: student_ids } });

    res.status(200).json(students);
  } catch (error) {
    console.error('Error getting students by course ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createStudentCourse,
  deleteStudentCourse,
  getAllStudentCourses,
  getCoursesByStudentId,
  getStudentsByCourseId
};
