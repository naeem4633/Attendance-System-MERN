const express = require('express');
const router = express.Router();
const { createStudent, getStudent, deleteStudent, updateStudent } = require('./controllers/studentController');

// Student Routes
router.post('/student/create', createStudent);
router.get('/student/:student_id', getStudent);
router.delete('/student/:student_id', deleteStudent);
router.put('/student/:student_id', updateStudent);

module.exports = router; 