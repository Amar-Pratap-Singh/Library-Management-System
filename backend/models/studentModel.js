const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;

// Update Schema as per requirement