const express = require('express')
require('dotenv').config()
var path = require('path');
const cors = require('cors')
const corsOptions = require('./config/corsOptions');
const app = express()
const credentials = require('./middleware/credentials');
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnect')

//DB connection
connectDB();


//MIDDLEWARE
app.use(credentials);
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../Frontend')))

//cookies
app.use(cookieParser())

app.use('/', require('./Routes/root'));
app.use('/register', require('./Routes/register'));
app.use('/auth', require('./Routes/autherization'));
app.use('/refresh', require('./Routes/refresh'));
app.use('/logout', require('./Routes/logout'));

app.use(verifyJWT);
app.use('/users', require('./Controllers/usersController'));
app.use('/posts', require('./Controllers/postController'));


app.all('*', (req, res) => {
    res.send('404')
    res.status(404)
})




mongoose.connection.once('open', () => {
    console.log('connected to DB')
    app.listen(process.env.PORT, () => {
        console.log(`server started on port ${process.env.PORT}`)
    })
})
