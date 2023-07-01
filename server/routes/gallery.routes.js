const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const Gallery = require('../models/Gallery');
const router = express.Router();

cloudinary.config({
  cloud_name: 'deydksecv',
  api_key: '813684313636543',
  api_secret: '0QotBFR0UhM66zGxIDKdMrCuctY'
});

const storage = multer.diskStorage({});
const upload = multer({ storage })

// Image upload route
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { imgTitle } = req.body;
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      transformation: [
        { width: 500, height: 500, crop: 'fill', gravity: 'auto' },
        { quality: 'auto:best' }
      ],
      folder: 'GalleryImages'
    });

    // Create a new image record in MongoDB
    const newImage = new Gallery({
      imgTitle,
      imgURL: uploadResult.secure_url
    });

    const savedImage = await newImage.save();

    res.json(savedImage);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});


//get all photos
router.get('/', async (req, res) => {
  try {
    const galleryImages = await Gallery.find();

    res.status(200).json(galleryImages)
  }
  catch (err) {
    res.status(500).json(err)
  }
})


//delete photo
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params

  try {
    await Gallery.findByIdAndDelete(id);

    res.status(200).json({ status: "Image deleted successfully with id " + id })
  }
  catch (err) {
    res.json(500).json(err)
  }
})


//update photo title
router.put('/update/:id', (req,res)=>{
  const {id} = req.params;
  const updatedData = req.body;

  Gallery.findByIdAndUpdate(id, updatedData, {new : true})
  .then((updatedDocument) => {
    res.status(200).json(updatedDocument);
  })
  .catch((err) => {
    console.error('Error updating document:', err);
    res.status(500).json({ error: 'Failed to update document' });
  });
})


module.exports = router;
