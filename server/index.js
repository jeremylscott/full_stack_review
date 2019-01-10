require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive') // for database
const session = require('express-session') // for sessions
const bcrypt = require('bcryptjs')  // for hashing
const app = express()
const port = 4004
app.use(json())




app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))