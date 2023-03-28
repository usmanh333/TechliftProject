const express = require('express')
const router = express.Router()
const bycrypt = require('bcryptjs')
let registerSchema = require('../models/Register')
let jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser'); // using cookie parser to parse the token
router.use(cookieParser())
const nodemailer = require('nodemailer')

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
      const { email, password } = req.body;
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
      // let hashedPassword = await bycrypt.hash(password, 10)
      // let hashedRetypePassword = await bycrypt.hash(retypePassword, 10)
      updateUser.username = username
      // updateUser.email = email
      updateUser.phoneNumber = phoneNumber
      updateUser.password = password
      updateUser.retypePassword = retypePassword

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

// Email configuration function

const transporter = nodemailer.createTransport({ //defining the transport with nodemailer
  service: "gmail",
  auth: {
    user: 'hafizahmad022@gmail.com',
    pass: "", // need to add one time pass from gmail
  }
})

// sending email to reset the password

const sendEmail = async (req, res)=>{
  console.log(req.body)
  const {email} = req.body
  try {
    const oldUser = await registerSchema.findOne({email: email}) // if the mail is exist in the DB
    console.log("user-find" , oldUser)
    const token = jwt.sign({_id:oldUser._id}, process.env.JWT_SECRET, { //adding token here 
      expiresIn: "120s"
    })
    console.log("token" , token)
    res.cookie('verifytoken', token, { httpOnly: true }); // saving the token in the cookie
    if(oldUser){
      const mailOptions= {
        from: process.env.NODE_MAILER_EMAIL,
        to: email,
        subject: "Sending Email for Password Reset",
        text: `This Link will Expired after 2 Minutes --> http://localhost:3000/reset-password/${oldUser._id}/${token}` // this is the get API which is created in Backend
      }
      transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
          console.log("error sending email", error)
          res.status(401).json({status: 401, message:"Email is not valid"})
        }else{
          console.log("Email has been Sent Successfully", info)
          res.status(201).json({status: 201,token, message:"Email sent successfully"})
        }
      })
    }
     
  } catch (error) {
    res.status(500).json({msg: "Internal Server Error", error})
  }
}

// Verifying user for forgot password
const verifyingUser = async(req,res)=>{
  const {id, token}= req.params // getting token from api
  console.log(id, token)
  try {
    const CookkieToken = req.headers.authorization?.split(' ')[1] || req.cookies.authToken;
  console.log("verifytoken: " + CookkieToken)
  try {
      let validUser = await registerSchema.findOne({_id:id}) 
      console.log(validUser)
      let decoded = jwt.verify(token, process.env.JWT_SECRET) // decoding the token
      console.log("DDdecodedToken" , decoded)
      if(validUser && decoded._id){ // if the user is valid and the token is valid then return
        return res.status(201).json({status: 201, validUser});
      }else{
        return res.status(401).json({error: "invalid Token"});
      }
  } catch (error) {
      res.status(500).json({ message: "Server error" });
  }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
} 

// Update Password
const updatePassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  console.log(password);
  try {
    let validUser = await registerSchema.findOne({ _id: id });
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(validUser, "updated password");
    console.log(decoded, "updated password");

    if (validUser && decoded._id) {
      const newPassword = await bycrypt.hash(password, 10); // encrypted the password
      let updatedPass = await registerSchema.findByIdAndUpdate( // Updating the new password
        id,
        { password: newPassword },
        { new: true } // to return the updated document
      );
      console.log(updatedPass, "updated password");
      return res.status(201).json({ status: 201, updatedPass });
    } else {
      return res.status(401).json({ error: "User not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = {getAllUsers, createUser,UserProfile, loginUser, updateUserProfile, getUserByID, sendEmail, verifyingUser, updatePassword}