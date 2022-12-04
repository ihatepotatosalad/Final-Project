const express = require('express')
const router = express.Router()
const path = require('path')
const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/role_list')

router.get('/', (req, res) => {
    res.send('hello form controller post')
})
router.post('/', verifyRoles(ROLES_LIST.Admin), (req, res) => {
    //only admin can delete posts
    //verifyRoles(ROLES_LIST.Admin,ROLES_LIST.User),
    res.send('hello')
})

module.exports = router