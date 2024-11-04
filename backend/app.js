const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const uri = 'mongodb+srv://pratapsinghamar015:amar012@cluster0.ezhhe.mongodb.net/?retryWrites=true&w=majority';
const studentRoutes = require('./routes/studentRoutes');

// Connect to MongoDB
mongoose.connect(uri)
.then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});


// enable cors Middleware
app.use(cors({
    origin: 'http://localhost:3000',
}));


// Routes
// app.use('/api/students', studentRoutes)
// Add all the route here also


module.exports = app;