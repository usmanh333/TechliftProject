const mongoose = require('mongoose');
const registerShema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
    },
    email: {
        type : String,
        unique : true,
    },
    phoneNumber: {
        type : Number,
    },
    password : {
        type : String,
    },
    retypePassword: {
        type : String,
    }
})

module.exports = mongoose.model('register', registerShema)