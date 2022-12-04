const User = require('../model/Users')
const bcrypt = require('bcrypt')


const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Please enter both username and password' })
    //check duplicate
    const duplicate = await User.findOne({ username: user }).exec()
    if (duplicate) return res.sendStatus(409)
    try {
        //hasj the password
        const hashedPassword = await bcrypt.hash(pwd, 10)
        //store user in DB
        const result = await User.create({ "username": user, 'password': hashedPassword })

        res.status(201).json({ 'sucess': `new user ${user} created` })
    } catch (err) {
        res.status(500).json({ 'message': err.message })
    }


}

module.exports = { handleNewUser }