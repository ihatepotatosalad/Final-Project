const express = require('express')
const ROLES_LIST = require('../config/role_list')
const router = express.Router()
const registerController = require('../Controllers/registerController')
const verifyRoles = require('../middleware/verifyRoles')

router.post('/', registerController.handleNewUser)
module.exports = router