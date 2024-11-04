const Student = require('../models/studentModel');

exports.getAllStudent = async (req, res) => {
    try {
        // Code to find student details of all students
        // Send the result in response to frontend
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// add a function of name getStudent
// add a function of name addStudent
// add a function of name updateStudent