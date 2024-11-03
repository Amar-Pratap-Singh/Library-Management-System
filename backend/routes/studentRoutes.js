const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/getStudentDetails', studentController.getStudentDetails);

module.exports = router;