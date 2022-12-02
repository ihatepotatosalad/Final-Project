const express = require('express')
require('dotenv').config()
var path = require('path');
const cors = require('cors')
const app = express()

//MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../Frontend')))


app.use('/posts', require('./Controllers/postController'))
app.use('/register', require('./Routes/register'))

app.get('/', (req, res) => {


    res.sendFile(path.resolve('../Frontend/index.html'))
    // res.sendFile(path.join(__dirname, '../Frontend', 'index.html'))
})


app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`)
})