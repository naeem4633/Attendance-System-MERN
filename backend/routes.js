const express = require('express');
const router = express.Router();
const { createStudent, getStudent, deleteStudent, updateStudent, getAllStudents } = require('./controllers/studentController');
const { createStaff, getStaff, updateStaff, deleteStaff, getAllStaff } = require('./controllers/staffController');
const { getAllPrograms, getProgramById, createProgram, deleteProgram } = require('./controllers/programController');
const { getAllCourses, getCourseById, createCourse, deleteCourse } = require('./controllers/courseController');
const { getAllCampuses, getCampusById, createCampus, deleteCampus } = require('./controllers/campusController');
const { createStudentCourse, deleteStudentCourse, getAllStudentCourses, getStudentsByCourseId, getCoursesByStudentId } = require('./controllers/studentCourseController');
const { getAllDevices, getDeviceById, createDevice, updateDevice, deleteDevice } = require('./controllers/deviceController');
const { createPersonDevice, deletePersonDevice, getAllPersonDevices, getPersonsByDeviceId, getDevicesByPersonId } = require('./controllers/personDeviceController');
const { createManualOverride, endManualOverride, getManualOverridesByDeviceId } = require('./controllers/manualOverrideController');

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
router.get('/student-courses/courses/:student_id', getCoursesByStudentId);
router.get('/student-courses/students/:course_id', getStudentsByCourseId);

// Device routes
router.get('/devices', getAllDevices);
router.get('/device/:device_id', getDeviceById);
router.post('/device', createDevice);
router.put('/device/:device_id', updateDevice);
router.delete('/device/:device_id', deleteDevice);

// Person-Device relationship routes
router.post('/person-device', createPersonDevice);
router.delete('/person-device/:person_id/:device_id', deletePersonDevice);
router.get('/person-devices', getAllPersonDevices);
router.get('/person-device/persons/:device_id', getPersonsByDeviceId);
router.get('/person-device/devices/:person_id', getDevicesByPersonId);

//Manual Override routes
router.post('/manual-override/:device_id', createManualOverride);
router.put('/end-manual-override/:device_id', endManualOverride);
router.get('/manual-overrides/:device_id', getManualOverridesByDeviceId);


module.exports = router; 