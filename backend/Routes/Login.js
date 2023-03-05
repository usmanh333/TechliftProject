const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(express.json())
router.use(cors())
let loginSchema = require('../models/Login')


// getting all users 
router.get('/login', async(req,res)=>{
    try {
        let getUser = await loginSchema.find()
        res.json(getUser)
    } catch (error) {
        console.error(error)
    }
})

// creating new users
router.post('/login', async(req,res)=>{
    try {
        let { email, password} = req.body;
        let login = new loginSchema({email, password})
        login.save()
        res.json(login)
    } catch (error) {
        console.error(error)
    }
})

// updating user profile

router.put('/login/:id', async(req, res)=>{
    try {
        let { email, password} = req.body;
        let updateUser = await loginSchema.findById(req.params.id)
        updateUser.email = email
        updateUser.password = password

        await updateUser.save()
        res.json(updateUser)
    } catch (error) {
        console.error(error)
    }
})

// getting user by ID
router.get('/login/:id', async(req,res)=>{
    try {
        let getUserByID = await loginSchema.findById(req.params.id)
        res.json(getUserByID)
    } catch (error) {
        console.error(error)
    }
});

// delete user by ID
router.delete('/login/:id', async(req,res)=>{
    try {
        let deleteUserByID = await loginSchema.deleteOne({_id :req.params.id}) // whenever delet a ser take object and then delete DB id to ID
        res.json(deleteUserByID)
    } catch (error) {
        console.error(error)
    }
});

module.exports = router