const jwt = require('jsonwebtoken');
const Register = require('../models/Register')





// adding token
exports.authMiddileware = async(req, res, next)=>{
    // const {authHeader} = req.headers.authorization;
    try {
      const token = req.headers.authorization?.split(' ')[1] || req.cookies.authToken;
    console.log("token: " + token)
    if(!token){
      return res.status(401).json({error: "invalid Token"});
    }
    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("decoded" + decoded)
        req.user = await Register.findById(decoded.id)
        console.log(req.user)
        next()
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
  
    // const token = authHeader.split(' ')[1]; 
    // jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken)=>{
    //   if(err){
    //     return res.status(401).json({error: "invalid Token"});
    //   }
    //   console.log('decodedToken:', decodedToken);
    //   try {
    //     req.user = await Register.findById(decodedToken.id)
    //     console.log('req.user:', req.user);
    //     next()
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: "Server error" });
    //   }
    // })
  