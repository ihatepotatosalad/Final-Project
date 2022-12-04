const User = require('../model/Users')

const handleLogout = async (req, res) => {
    //on front end deletes access token
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204)//no content to return

    const refreshToken = cookies.jwt
    //has refresh token been found in the database

    const foundUser = await User.findOne({ refreshToken }).exec()
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
        return res.sendStatus(204)
    }

    //Deletes the refresh token form the DB
    foundUser.refreshToken = ''
    const result = await foundUser.save()

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.sendStatus(204)
    console.log(result)
}

module.exports = { handleLogout }