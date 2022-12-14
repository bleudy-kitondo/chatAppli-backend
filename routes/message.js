const express = require('express')
const router = express.Router()
const messageControler = require('../controllers/message')

router.post('/add', messageControler.addMessage)
// router.get('/getall/:from/:to', messageControler.getMessage)
router.get('/getall/:conversationId', messageControler.getMessage)

module.exports = router
