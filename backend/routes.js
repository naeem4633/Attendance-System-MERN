const express = require('express');
const router = express.Router();
const { createStudent, getStudent, deleteStudent, updateStudent, getAllStudents } = require('./controllers/studentController');
const { createStaff, getStaff, updateStaff, deleteStaff, getAllStaff } = require('./controllers/staffController');
const { getAllPrograms, getProgramById, createProgram, deleteProgram } = require('./controllers/programController');
const { getAllCourses, getCourseById, createCourse, deleteCourse } = require('./controllers/courseController');
const { getAllCampuses, getCampusById, createCampus, deleteCampus } = require('./controllers/campusController');
const { createStudentCourse, deleteStudentCourse, getAllStudentCourses, getStudentsByCourseId, getCoursesByStudentId } = require('./controllers/studentCourseController');
const { getAllDevices, getDeviceById, createDevice, updateDevice, deleteDevice } = require('./controllers/deviceController');
const {createStudentDevice, deleteStudentDevice, getAllStudentDevices, getStudentsByDeviceId, getDevicesByStudentId} = require('./controllers/studentDeviceController');
  

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

// Course routes
router.get('/courses', getAllCourses);
router.get('/course/:course_id', getCourseById);
router.post('/course', createCourse);
router.delete('/course/:course_id', deleteCourse);

// Campus routes
router.get('/campuses', getAllCampuses);
router.get('/campus/:campus_id', getCampusById);
router.post('/campus', createCampus);
router.delete('/campus/:campus_id', deleteCampus);

// Student-Course relationship routes
router.post('/student-course', createStudentCourse);
router.delete('/student-course/:student_id/:course_id', deleteStudentCourse);
router.get('/student-courses', getAllStudentCourses);
router.get('/student-courses/course-ids/:student_id', getCoursesByStudentId);
router.get('/student-courses/student-ids/:course_id', getStudentsByCourseId);

// Device routes
router.get('/devices', getAllDevices);
router.get('/device/:device_id', getDeviceById);
router.post('/device', createDevice);
router.put('/device/:device_id', updateDevice);
router.delete('/device/:device_id', deleteDevice);

// Route to create a new student-device relationship
router.post('/student-device', createStudentDevice);
router.delete('/student-device/:student_id/:device_id', deleteStudentDevice);
router.get('/student-devices', getAllStudentDevices);
router.get('/student-devices/student-ids/:device_id', getStudentsByDeviceId);
router.get('/student-devices/device-ids/:student_id', getDevicesByStudentId);


module.exports = router; 