const mongoose = require('mongoose')

const Schema = mongoose.Schema

const infoSchema = new Schema({
    eventDate: {
        type: Date,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    numberOfPeople: {
        type: String,
        required: true,
        default: 0
    },
    mobileNumber: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    eventAddress: {
        type: String,
        required: true
    },
    optionalMessage: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false,
        default: "pending"
    }
}, { timestamps: true })

module.exports = mongoose.model('Info', infoSchema)
