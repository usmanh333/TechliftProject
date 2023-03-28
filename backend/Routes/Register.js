const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(express.json())
router.use(cors())
const { authMiddileware } = require('../middleware/auth') // getting auth middleware like user profile if user is logged in
const {getAllUsers, loginUser, createUser, UserProfile, updateUserProfile, getUserByID, sendEmail, verifyingUser, updatePassword} = require('../Controllers/loginRegisterUsersController')

// getting all users 
router.get('/register', getAllUsers)  
 
// creating new users
router.post('/register', createUser)

// Login users
router.post('/login', loginUser);

//   Profile route

router.get('/profile',authMiddileware, UserProfile); // protected route

// Updating profile

router.put('/register/:id',authMiddileware, updateUserProfile) // protected route

// getting user by ID
router.get('/register/:id', getUserByID); // protected route

// sending email to reset the password
router.post('/sendpasswordlink', sendEmail); 

// Verifying user for forgot password
router.get('/resetpassword/:id/:token', verifyingUser); 

// Update user Password
router.post('/resetpassword/:id/:token', updatePassword); 

module.exports = router 



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
