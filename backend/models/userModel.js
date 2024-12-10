const mongoose = require('mongoose')

const Schema = mongoose.Schema

const infoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Info', infoSchema)
