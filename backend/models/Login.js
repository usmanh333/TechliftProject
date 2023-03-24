const mongoose = require('mongoose');
const loginSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    email: {
        type : String,
        lowercase: true
    },
    password : { 
        type : String,
    }
}, {timestamps: true})

module.exports = mongoose.model('login', loginSchema)