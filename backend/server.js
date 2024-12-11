require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const infoRoutes = require('./routes/info')
const menuRoutes = require('./routes/menu');


// express app
const app = express()
// Add before routes
app.use(cors())

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//uploading of static images in the project folder
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use('/api/info',infoRoutes)
app.use('/api/menu', menuRoutes);

// connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })