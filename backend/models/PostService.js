const mongoose = require('mongoose');

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
    }

})



module.exports = mongoose.model('post_a_service',userShema)






// ------------------------------------------------------

// Practice Part-2 

// const mongoose = require('mongoose')

// const userShema = new mongoose.Schema({
//     name : String,
//     email: String,
//     password: String,
// })





// module.exports = mongoose.model('users',userShema)


// Practice Part-1

// const mongoose = require('mongoose');

// const userShema =  new mongoose.Schema({
//     name: String,
// })

// module.exports = mongoose.model('User',userShema)