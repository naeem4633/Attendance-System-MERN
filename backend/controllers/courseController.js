const Course = require('../models/courseModel');

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error getting courses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a course by course_id
const getCourseById = async (req, res) => {
  const course_id = req.params.course_id;

  try {
    const course = await Course.findOne({ course_id: course_id });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error('Error getting course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new course
const createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a course by course_id
const deleteCourse = async (req, res) => {
  const course_id = req.params.course_id;

  try {
    const deletedCourse = await Course.findOneAndDelete({ course_id: course_id });
    if (!deletedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  deleteCourse
};
