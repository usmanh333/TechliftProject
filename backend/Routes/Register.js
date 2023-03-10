const express = require('express')
const router = express.Router()
const bycrypt = require('bcryptjs')
const cors = require('cors')
router.use(express.json())
router.use(cors())
let registerSchema = require('../models/Register')


// getting all users 
router.get('/register', async(req,res)=>{
    try {
        let getUser = await registerSchema.find()
        res.json(getUser)
    } catch (error) {
        console.error(error)
    }
})

// creating new users
router.post('/register', async(req,res)=>{
    try {
        let {username, email, phoneNumber, password, retypePassword} = req.body;
        const oldUser = await registerSchema.findOne({email})
        if(oldUser){
            return res.json({error: 'Already registered'})
        }
        let hashedPassword = await bycrypt.hash(password, 10) // hashing the password
        let register = new registerSchema({username, email, phoneNumber, password : hashedPassword, retypePassword})
        register.save()
        res.json(register)
    } catch (error) {
        console.error(error)
    }
})

// updating user profile

router.put('/register/:id', async(req, res)=>{
    try {
        let {username, email, phoneNumber, password, retypePassword} = req.body;
        let updateUser = await registerSchema.findById(req.params.id)
        updateUser.username = username
        updateUser.email = email
        updateUser.phoneNumber = phoneNumber
        updateUser.password = password
        updateUser.retypePassword = retypePassword

        await updateUser.save()
        res.json(updateUser)
    } catch (error) {
        console.error(error)
    }
})

// getting user by ID
router.get('/register/:id', async(req,res)=>{
    try {
        let getUserByID = await registerSchema.findById(req.params.id)
        res.json(getUserByID)
    } catch (error) {
        console.error(error)
    }
});

// delete user by ID
router.delete('/register/:id', async(req,res)=>{
    try {
        let deleteUserByID = await registerSchema.deleteOne({_id :req.params.id}) // whenever delet a ser take object and then delete DB id to ID
        res.json(deleteUserByID)
    } catch (error) {
        console.error(error)
    }
});

module.exports = router