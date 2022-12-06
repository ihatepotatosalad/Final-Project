const User = require('../model/Users')


const bcrypt = require('bcrypt');
const e = require('express');
const jwt = require('jsonwebtoken')
require('dotenv').config()


const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Please enter both username and password' })

    const foundUser = await User.findOne({ username: user }).exec()
    if (!foundUser) return res.sendStatus(401)
    //check password
    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        const roles = Object.values(foundUser.roles)
        //Create jwt token for user to remain logged in
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    'username': foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        )
        const refreshToken = jwt.sign(
            { 'username': foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        )
        foundUser.refreshToken = refreshToken
        const result = await foundUser.save()
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', /*secure: true,*/ maxAge: 24 * 60 * 60 * 1000 })
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin }