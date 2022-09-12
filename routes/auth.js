const express = require('express')
const router = express.Router()

const { register, logIn } = require('../controllers/auth')

router.post('/register', register)
router.post('/log-in', logIn)

module.exports = router
