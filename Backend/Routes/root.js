const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {


    res.sendFile(path.resolve('../Frontend/index.html'))
    // res.sendFile(path.join(__dirname, '../Frontend', 'index.html'))
})
module.exports = router