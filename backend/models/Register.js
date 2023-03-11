const mongoose = require('mongoose');
const registerShema = new mongoose.Schema({
    username : {
        type : String,
        require:true,
    },
    email: {
        type : String,
        require:true,
    },
    phoneNumber: {
        type : Number,
        require:true,
    },
    password : {
        type : String,
        require:true,
    },
    retypePassword: {
        type : String,
        require:true,
    }
})

module.exports = mongoose.model('register', registerShema)