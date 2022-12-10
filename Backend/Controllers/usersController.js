const express = require('express')
const router = express.Router()

const path = require('path')
const { appendFile } = require('fs')

const User = require('../model/Users')
const ROLES_LIST = require('../config/role_list')
const verifyRoles = require('../middleware/verifyRoles')



router.get('/', async (req, res) => {
    allUsers = await User.find()
    res.json(allUsers)
})

router.get('/:id', async (req, res) => {
    let selectUser
    try {
        selectUser = await User.findOne({ username: req.params.id })
        if (!selectUser) {
            return res.status(404).json({ message: 'no user by the name' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    return res.json(selectUser)
})

module.exports = router