const mongoose = require('mongoose');
const RegisterShema = new mongoose.Schema({
    username : {
        type : String,
    },
    email: {
        type : String,
    },
    phoneNumber: {
        type : String,
    },
    password : {
        type : String,
    },
    retypePassword: {
        type : String,
    }
})

module.exports = mongoose.model('register', RegisterShema)