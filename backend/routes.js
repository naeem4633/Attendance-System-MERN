const express = require('express');
const router = express.Router();
const { createStudent, getStudent, deleteStudent, updateStudent } = require('./controllers/studentController');
const { createStaff, getStaff, updateStaff, deleteStaff } = require('./controllers/staffController');

// Student Routes
router.post('/student/create', createStudent);
router.get('/student/:student_id', getStudent);
router.delete('/student/:student_id', deleteStudent);
router.put('/student/:student_id', updateStudent);

// Staff Routes
router.post('/staff/create', createStaff);
router.get('/staff/:staff_id', getStaff);
router.put('/staff/:staff_id', updateStaff);
router.delete('/staff/:staff_id', deleteStaff);

module.exports = router; 