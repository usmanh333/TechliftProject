const mongoose = require('mongoose');
const registerShema = new mongoose.Schema({
    username : {
        type : String,
    },
    email: {
        type : String,
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