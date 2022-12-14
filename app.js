const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const messageRoutes = require('./routes/message')
const conversationRoutes = require('./routes/conversation')
const cors = require('cors')
const passport = require("passport")
const { session } = require('passport')
require('./middlewares/auth')

app.use(cors())
app.use(express.json())

app.use(passport.initialize())

restrictor = passport.Authenticator('jwt', {session:false})
  
app.use('/api/auth', userRoutes)
app.use('/api/message',messageRoutes)
app.use('/api/conversation',conversationRoutes)

module.exports = {app}