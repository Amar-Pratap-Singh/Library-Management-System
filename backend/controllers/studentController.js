const Student = require('../models/studentModel');

exports.getStudentDetails = async (req, res) => {
    try {
        const student = await Student.findOne();
        res.json({ data: student || 'No student found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};