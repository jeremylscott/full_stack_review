const bcrypt = require('bcryptjs')

const login = (req,res) => {
    const db = req.app.get('db')
    db.findUser(req.body) // i could also do ({username: req.body.username})
    .then(async users => {
        if(!users.length) {
            res.status(401).json('No user found')
        }
        else {
            const isMatch = await bcrypt.compare(req.body.password, users[0].password)
            if(isMatch) {
                req.session.user = {username: users[0].username}  // to add the user to the session
                res.status(200).json({username: users[0].username})
            }
            else {
                res.status(401).json('Incorrect password')
            }
        }
    })
}

const signup = async (req,res) => {
    const db = req.app.get('db')
    const hash = await bcrypt.hash(req.body.password, 10)

    try {
    const response = await db.addUser({username: req.body.username, password: hash})
    res.json({username: response[0].username})
    }
    catch(e) {
        console.log(e)
        res.status(401).json('An error occurred')
    }
}

const me = (req,res) => {
    console.log(req.session);
    if(req.session.user) {
        res.json(req.session.user)
    }
    else {
        res.status(401).json('Unauthorized, please log in')
    }
}

module.exports = {
    login,
    signup,
    me
}