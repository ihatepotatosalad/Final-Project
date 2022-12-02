const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');
const e = require('express');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Please enter both username and password' })

    const foundUser = usersDB.users.find(person => person.username === user)
    if (!foundUser) return res.sendStatus(401)
    //check password
    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        //Create jwt token for user to remain logged in
        res.json({ 'sucess': `User ${user} is logged in` })
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin }