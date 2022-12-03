const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}


const fsPromises = require('fs').promises
const path = require('path')

const handleLogout = async (req, res) => {
    //on front end deletes access token
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204)//no content to return

    const refreshToken = cookies.jwt
    //has refresh token been found in the database

    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken)
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
        return res.sendStatus(204)
    }

    //Deletes the refresh token form the DB

    const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
    const currentUser = { ...foundUser, refreshToken: '' };
    usersDB.setUsers([...otherUsers, currentUser])
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    )
    res.clearCookie('jwt', { httpOnly: true })
    res.sendStatus(204)
}

module.exports = { handleLogout }