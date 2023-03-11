const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const cors = require('cors')
router.use(express.json())
router.use(cors())
let registerSchema = require('../models/Register')


// creating new users
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await registerSchema.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      } else {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid email or password" });
        }
        res.json(user);
        console.log("Login successful")
      }
    } catch (error) {
      console.error(error);
    }
  });
  

module.exports = router