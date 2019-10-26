const express = require('express')
const router = express.Router()
const moodCtrl = require ('../../controllers/moodData')

router.post('/moodinput', moodCtrl.create)
router.post('/all')