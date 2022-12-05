const express = require('express')
const router = express.Router()
const Post = require('../model/Posts')
const User = require('../model/Users')
const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/role_list')
const jwt = require('jsonwebtoken')



router.get('/', async (req, res) => {
    const allPosts = await Post.find()
    if (!Post) return res.status(204).json({ 'message': 'no  Posts Found' })
    res.json(allPosts)
})
router.post('/', async (req, res) => {

    //verifyRoles(ROLES_LIST.Admin,ROLES_LIST.User),
    const cookies = req.cookies
    const refreshToken = cookies.jwt
    const { msg } = req.body;
    const currentUser = await User.findOne({ refreshToken }).exec()
    if (currentUser) {
        if (!msg) {
            return res.status(400).json({ 'message': 'please add a message' })
        }
        const result = await Post.create({ "name": currentUser.username, 'message': msg })
        console.log(result)
        console.log(currentUser)

        res.status(201).json({ 'sucess': `new user message created` })


    }


})

module.exports = router