require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mailer = require('./routes/sendEmailRoute');
const infoRoutes = require('./routes/request');
const menuRoutes = require('./routes/menu');

// express app
const app = express();

// middleware
app.use(cors()); // Apply CORS globally
app.use(express.json()); // Middleware to parse JSON requests

// Log requests for debugging
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//uploading of static images in the project folder
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/api/request', infoRoutes);
app.use('/api/menu', menuRoutes);
mailer(app); // Call the email route

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
