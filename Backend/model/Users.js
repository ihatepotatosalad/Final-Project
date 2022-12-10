const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    }, roles: {
        User: {
            type: Number,
            default: 2001
        },
        Admin: Number
    },

    password: {
        type: String,
        required: true
    },
    refreshToken: String,
    postCreated: {
        type: Number,
        default: 0
    }

})
module.exports = mongoose.model('User', UserSchema)