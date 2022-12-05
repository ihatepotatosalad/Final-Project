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

module.exports = router