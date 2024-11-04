const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/getAllStudent', studentController.getAllStudent);

// Add all the routes here with proper route name starting with /

module.exports = router;