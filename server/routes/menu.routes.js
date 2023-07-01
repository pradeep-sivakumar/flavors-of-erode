const express = require('express')
const router = express.Router()
const Dishes = require('../models/Dishes')
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const storage = multer.diskStorage({});
const upload = multer({ storage })


//add new dish
router.post('/dishes/add', upload.single('image'), async (req, res) => {
    try {
        const { dishName, bestSeller, recommended, markPrice, sellPrice, variety, veg, ratings, available } = req.body;
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            transformation: [
                { width: 500, height: 500, crop: 'fill', gravity: 'auto' },
                { quality: 'auto:best' }
            ],
            folder: 'Dishes'
        });

        const newDish = new Dishes({
            dishName, bestSeller, recommended, markPrice, sellPrice, variety, veg, ratings, available,
            imgURL: uploadResult.secure_url
        });

        const savedImage = await newDish.save();

        res.json(savedImage);

    }

    catch (error) {
        res.status(500).json({ error: err });
    }
});



//get all dishes list
router.get('/dishes', async (req, res) => {
    try {
        const dishes = await Dishes.find();
        res.status(200).json(dishes);
    }
    catch (err) {
        res.status(500).json(err);
    }
})


//delete dish
router.delete('/dishes/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Dishes.findByIdAndDelete(id).then(() => {
        res.status(200).json({ status: "Document is deleted succesfully with id " + id })
    }).catch((err) => {
        res.status(500).json(err);
    })
})


//updating 
router.put('/dishes/update/:id', upload.single('image'), async (req, res) => {
    const documentId = req.params.id;
    const updatedData = req.body;
    const updatedImage = req.file;
    let document; 
  
    Dishes.findById(documentId)
      .then((foundDocument) => {
        document = foundDocument; 
        Object.assign(document, updatedData);

        if (updatedImage) {
          return cloudinary.uploader.upload(updatedImage.path, {
            transformation: [
                { width: 500, height: 500, crop: 'fill', gravity: 'auto' },
                { quality: 'auto:best' }
            ],
            folder: 'Dishes'
        });
        }
  
        return null; 
      })
      .then((uploadResult) => {
        if (uploadResult) {
          const imageURL = uploadResult.secure_url;
          document.imgURL = imageURL;
        }
        return document.save();
      })
      .then((updatedDocument) => {
        res.status(200).json(updatedDocument);
      })
      .catch((err) => {
        console.error('Error updating document:', err);
        res.status(500).json({ error: 'Failed to update document' });
      });
});

module.exports = router;