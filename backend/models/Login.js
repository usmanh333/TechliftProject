const mongoose = require('mongoose');
const loginSchema = new mongoose.Schema({
    email: {
        type : String,
        lowercase: true
    },
    password : {
        type : String,
    }
})

module.exports = mongoose.model('login', loginSchema)