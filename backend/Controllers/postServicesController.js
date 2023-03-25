let express = require('express');
let router = express.Router();
let cors = require('cors');
router.use(cors());
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded(
  { extended:true }
))
router.use(bodyParser.json());
router.use(express.json())
const post_a_service = require('../models/PostService') // Schema

// getting all cards posts
const getAllPosts = async(req, res) =>{
    try {
      const allCards = await post_a_service.find()
    res.status(200).json(allCards)
    } catch (error) {
      res.status(500).json({ msg: "INTERNAL SERVER ERROR" , error: error });
    }
}

// getting cards post by a ID
const getPostByID = async (req, res)=>{
    try {
      const postById = await post_a_service.findById(req.params.id)
    res.status(200).json(postById)
    } catch (error) {
      res.status(500).json({ msg: "INTERNAL SERVER ERROR" , error: error });
    }
}

// Delete card post by ID
const deletePost =  async (req, res) => {
  try {
    const removeCard = await post_a_service.deleteOne({ _id: req.params.id });
    res.json(removeCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { getAllPosts, getPostByID, deletePost};