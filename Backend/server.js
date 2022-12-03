const express = require('express')
require('dotenv').config()
var path = require('path');
const cors = require('cors')
const app = express()
const verifyJWT = require('./middleware/verifyJWT')

//MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../Frontend')))

app.use('/', require('./Routes/root'));
app.use('/register', require('./Routes/register'));
app.use('/login', require('./Routes/autherization'));

app.use(verifyJWT);
app.use('/posts', require('./Controllers/postController'));
app.use('/users', require('./Controllers/usersController'));

app.all('*', (req, res) => {
    res.send('404')
    res.status(404)
})





app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`)
})