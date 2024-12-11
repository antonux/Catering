const express = require('express')

const {
    getInfo,
    getInfos,
    createInfo,
    updateInfo,
    deleteInfo
} = require('../controllers/infoController')

const router = express.Router()

// GET all info
router.get('/', getInfos)

//GET a single info
router.get('/:id', getInfo)

// POST a new info
router.post('/', createInfo )

// DELETE an info
router.delete('/:id', deleteInfo )

// UPDATE an info
router.patch('/:id', updateInfo )

module.exports = router