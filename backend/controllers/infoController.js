const Info = require('../models/infoModel')
const mongoose = require('mongoose')

// get all info
const getInfos = async (req, res) => {
    const infos = await Info.find({}).sort({createdAt: -1})

    res.status(200).json(infos)
}

// get a single info
const getInfo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such info"})
    }

    const info = await Info.findById(id)

    if (!info) {
        return res.status(404).json({error: "No such info"})
    }

    res.status(200).json(info)
}




// create a new info
const createInfo = async (req, res) => {
    const {title, count, weight} = req.body

    // add doc to db
    try {
        const info = await Info.create({title, count, weight})
        res.status(200).json(info)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete an info
const deleteInfo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such info"})
    }

    const info = await Info.findOneAndDelete({_id: id})

    if (!info) {
        return res.status(404).json({error: "No such info"})
    }

    res.status(200).json(info)
}


// update an info
const updateInfo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such info"})
    }

    const info = await Info.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!info) {
        return res.status(404).json({error: "No such info"})
    }

    res.status(200).json({title: info.title, message: "updated"})

}




module.exports = {
    getInfo,
    getInfos,
    createInfo,
    updateInfo,
    deleteInfo
}
