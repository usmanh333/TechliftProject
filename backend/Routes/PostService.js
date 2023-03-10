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
const post_a_service = require('../models/Users') // Schema


const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Routes/uploads/');
  },
  filename: function (req, file, cb) {
    const imageName = `${uuidv4()}.${file.originalname.split('.').pop()}`;
    cb(null, imageName);
  }
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB file size limit
  }
});


// getting data by filename
router.get('/cardsdata/uploads/:imageName', (req, res) => {
  const { imageName } = req.params;
  const imagePath = `uploads/${imageName}`;
  res.sendFile(imagePath, { root: __dirname });
});


// getting all cards posts
router.get('/cardsdata', async(req, res) =>{
    const allCards = await post_a_service.find()
    res.json(allCards)
})


// posting cards 
router.post('/cards', upload.single('image'), async (req, res) => {
  const { name, desc, price, number, selectDistrict, selectArea ,checkbox,selectCategory } = req.body;
  // checking file
  if (!req.file) {
    res.status(400).json({ msg: "BAD REQUEST" });
    return; 
  }
  const cards = new post_a_service({
    name: name,
    desc: desc,
    image: req.file.filename,
    price: price,
    number: number,
    selectDistrict: selectDistrict,
    selectArea: selectArea,
    selectCategory :selectCategory,
    checkbox : checkbox,
    date: new Date().toISOString()
  });
  console.log(cards)
  try {
    await cards.save();
    res.json(cards);
    console.log(cards)
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "INTERNAL SERVER ERROR" });
  }
});


// getting cards post by a ID
router.get('/cardsdata/:id', async (req, res)=>{
    const postById = await post_a_service.findById(req.params.id)
    res.json(postById)
})


//  Updating cards data
router.put('/cardsdata/:id', upload.single('image'), async (req, res) => {
  try {
    // Get the card by ID
    const card = await post_a_service.findById(req.params.id);

    // Update the card data
    card.name = req.body.name;
    card.desc = req.body.desc;
    card.image = req.file.filename; // Use the filename of the uploaded file
    card.price = req.body.price;
    card.number = req.body.number;
    card.selectDistrict = req.body.selectDistrict;
    card.selectArea = req.body.selectArea;
    card.selectCategory = req.body.selectCategory;
    card.checkbox = req.body.checkbox;
    card.date= new Date().toISOString()

    // Save the updated card
    await card.save();

    // Send the updated card object back to the client
    res.status(200).json(card);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Delete card post by ID
router.delete('/cardsdata/:id', async (req, res) => {
  try {
    const removeCard = await post_a_service.deleteOne({ _id: req.params.id });
    res.json(removeCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;