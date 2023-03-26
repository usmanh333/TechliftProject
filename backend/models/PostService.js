const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const userShema = new mongoose.Schema({
    name : {
        type : String,
    },
    desc: {
        type : String,
    },
    price: {
        type : Number,
    },
    number: {
        type : Number,
    },
    selectDistrict: {
        type : String,
        required : true,
    },
    selectArea: {
        type : String,
        required : true,
    },
    checkbox: {
        type : Boolean,
        default : false,
    },
    selectCategory: {
        type : String,
        default : true,
    },
    image: {
        type : String,
    },
    date: {
        type: String,
        default: Date.now
    },
    isAdmin: {
        type : Boolean,
        default : false,
    },
    userID : {
        type: ObjectId,
        ref: 'login',
        required: true
    }
},{timestamps: true})



module.exports = mongoose.model('post_a_service',userShema)