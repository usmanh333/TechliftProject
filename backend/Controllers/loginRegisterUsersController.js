const express = require('express')
const router = express.Router()
const bycrypt = require('bcryptjs')
let registerSchema = require('../models/Register')
let jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser'); // using cookie parser to parse the token
router.use(cookieParser())

// getting all users 
const getAllUsers =  async(req,res)=>{
    try {
        let getUser = await registerSchema.find()
        res.json(getUser)
    } catch (error) {
        console.error(error)
    }
}


// Making global JWT Function
const signToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{ expiresIn: process.env.JWT_EXPIRES_IN })
} 

// creating new users
const createUser = async(req,res)=>{
    try {
        let {username, email, phoneNumber, password, retypePassword} = req.body;
        const oldUser = await registerSchema.findOne({email})
        if(oldUser){
            return res.json({error: 'Already registered'})
        }
        let hashedPassword = await bycrypt.hash(password, 10) // hashing the password
        let register =  new registerSchema({username, email, phoneNumber, password : hashedPassword, retypePassword: hashedPassword})
        // let token = signToken(register._id) // JWT token genrated 
        await register.save()
        // res.json(register,token)
        res.status(200).json({status: 'User is Registered Now', user : register})
    } catch (error) {
        console.error(error)
    } 
}

// Login users
const loginUser =  async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const user = await registerSchema.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
        
      const isPasswordValid = await bycrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
          
      const token = signToken(user._id);
      // set the access_token cookie
    res.cookie('token', token, { httpOnly: true });
      const { password: _,retypePassword, ...userWithoutPassword } = user.toObject();
      console.log(userWithoutPassword)
      res.status(200).json({msg: "Login Successfully", token, user: userWithoutPassword });
      console.log("Login successful");
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
  
//   Profile route

const UserProfile = async (req, res) => {
    try {
      const { _id, email } = await registerSchema.findById(req.user.id).select({ password: 0, retypePassword: 0 });
	res.status(200).json({
		id: _id,
		email,
	});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }

// Update user profile

const updateUserProfile = async(req, res)=>{
  try {
      let {username, phoneNumber, password, retypePassword} = req.body;
      let updateUser = await registerSchema.findById(req.params.id)
      let hashedPassword = await bycrypt.hash(password, 10)
      let hashedRetypePassword = await bycrypt.hash(retypePassword, 10)
      updateUser.username = username
      // updateUser.email = email
      updateUser.phoneNumber = phoneNumber
      updateUser.password = hashedPassword
      updateUser.retypePassword = hashedRetypePassword

      await updateUser.save()
      res.json(updateUser)
  } catch (error) {
      console.error(error)
  }
}

// getting user ByID

const getUserByID =  async(req,res)=>{
  try {
      let getUserByID = await registerSchema.findById(req.params.id)
      res.status(200).json(getUserByID)
  } catch (error) {
      res.status(500).json({msg: "Internal Server Error", error})
  }
}


module.exports = {getAllUsers, createUser,UserProfile, loginUser, updateUserProfile, getUserByID}