const express = require('express');
const router = express.Router();
const { createStudent, getStudent, deleteStudent, updateStudent, getAllStudents } = require('./controllers/studentController');
const { createStaff, getStaff, updateStaff, deleteStaff, getAllStaff } = require('./controllers/staffController');
const { getAllPrograms, getProgramById, createProgram, deleteProgram } = require('./controllers/programController');
const { getAllCourses, getCourseById, createCourse, deleteCourse } = require('./controllers/courseController');

// Student Routes
router.post('/student', createStudent);
router.get('/student/:student_id', getStudent);
router.delete('/student/:student_id', deleteStudent);
router.put('/student/:student_id', updateStudent);
router.get('/students', getAllStudents);

// Staff Routes
router.post('/staff', createStaff);
router.get('/staff/:staff_id', getStaff);
router.put('/staff/:staff_id', updateStaff);
router.delete('/staff/:staff_id', deleteStaff);
router.get('/staff', getAllStaff);

// Program routes
router.post('/program', createProgram);
router.get('/program/:program_id', getProgramById);
router.delete('/program/:program_id', deleteProgram);
router.get('/programs', getAllPrograms);

// Route to get all courses
router.get('/courses', getAllCourses);
router.get('/course/:course_id', getCourseById);
router.post('/course', createCourse);
router.delete('/course/:course_id', deleteCourse);

module.exports = router; 