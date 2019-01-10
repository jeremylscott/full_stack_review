require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive') // for database
const session = require('express-session') // for sessions
const bcrypt = require('bcryptjs')  // for hashing
const app = express()
const {login,signup,me} = require('./authController')
app.use(json())  // this gives us req.body in the form of json

// create a session
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUnitialized: false,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 7
    }
}))

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db',db)
        console.log('Database Connected');
    })
    .catch(err => console.log(err))

app.post('/auth/login', login)
app.post('/auth/signup', signup)
app.get('auth/me', me)



app.listen(process.env.EXPRESS_PORT, () => console.log(`Server listening on port ${process.env.EXPRESS_PORT}`))