const express = require('express')
const router = express.Router()

const path = require('path')
const { appendFile } = require('fs')
const data = {}
data.users = require('../model/users.json')
const ROLES_LIST = require('../config/role_list')
const verifyRoles = require('../middleware/verifyRoles')



router.get('/', (req, res) => {
    res.json(data.users)
})

module.exports = router