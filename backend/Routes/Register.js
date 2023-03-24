const express = require('express')
const router = express.Router()
const bycrypt = require('bcryptjs')
const cors = require('cors')
router.use(express.json())
router.use(cors())
let registerSchema = require('../models/Register')
let jwt = require('jsonwebtoken')
const { authMiddileware } = require('../middleware/auth') // getting auth middleware like user profile if user is logged in
const cookieParser = require('cookie-parser'); // using cookie parser to parse the token
router.use(cookieParser())

// getting all users 
router.get('/register', async(req,res)=>{
    try {
        let getUser = await registerSchema.find()
        res.json(getUser)
    } catch (error) {
        console.error(error)
    }
}) 


// Making global JWT Function
const signToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{ expiresIn: process.env.JWT_EXPIRES_IN })
} 

// creating new users
router.post('/register', async(req,res)=>{
    try {
        let {username, email, phoneNumber, password, retypePassword} = req.body;
        const oldUser = await registerSchema.findOne({email})
        if(oldUser){
            return res.json({error: 'Already registered'})
        }
        let hashedPassword = await bycrypt.hash(password, 10) // hashing the password
        let register =  new registerSchema({username, email, phoneNumber, password : hashedPassword, retypePassword})
        // let token = signToken(register._id) // JWT token genrated 
        await register.save()
        // res.json(register,token)
        res.status(200).json({status: 'User is Registered Now', user : register})
    } catch (error) {
        console.error(error)
    } 
})

// adding token
// const authMiddileware = (req, res, next)=>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader){
//       return res.status(401).json({error: "invalid authorization header"});
//     }
//     const token = authHeader.split(' ')[1];
//     jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken)=>{
//       if(err){
//         return res.status(401).json({error: "invalid Token"});
//       }
//       req.email = decodedToken
//       next()
//     })
//   }

// Login users
router.post('/login', async (req, res) => {
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
  });
  
//   Profile route

router.get('/profile',authMiddileware, async (req, res) => {
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
  });

  
  // router.get('/logout', async (req, res) => {
  //   try {
  //     res.clearCookie('token')
  //     res.status(200).json({msg: "Logout" });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Server error" });
  //   }
  // });


// 
// router.get('/login', async(req, res) => {
//     try {
//         //   const { email, password } = req.body;  // destructuring is not working when getting fields without password and retype password
//           const user = await registerSchema.findOne({ email: req.body.email });
//           !user && res.status(401).json({ message: "Invalid email or password" });
          
//           const isPasswordValid = await bycrypt.compare(req.body.password ?? '', user.password ?? '');
//             !isPasswordValid && res.status(401).json({ message: "Invalid email or password" });
            
            
            
//             res.status(200).json({status: 'Profile Data',  user : user})
//             console.log("Login successful")
//         } catch (error) {
//           console.error(error);
//         }
// })

// updating user profile

// router.put('/register/:id', async(req, res)=>{
//     try {
//         let {username, email, phoneNumber, password, retypePassword} = req.body;
//         let updateUser = await registerSchema.findById(req.params.id)
//         updateUser.username = username
//         updateUser.email = email
//         updateUser.phoneNumber = phoneNumber
//         updateUser.password = password
//         updateUser.retypePassword = retypePassword

//         await updateUser.save()
//         res.json(updateUser)
//     } catch (error) {
//         console.error(error)
//     }
// })

// getting user by ID
// router.get('/register/:id', async(req,res)=>{
//     try {
//         let getUserByID = await registerSchema.findById(req.params.id)
//         res.json(getUserByID)
//     } catch (error) {
//         console.error(error)
//     }
// });

// delete user by ID
// router.delete('/register/:id', async(req,res)=>{
//     try {
//         let deleteUserByID = await registerSchema.deleteOne({_id :req.params.id}) // whenever delet a ser take object and then delete DB id to ID
//         res.json(deleteUserByID)
//     } catch (error) {
//         console.error(error)
//     }
// });

module.exports = router