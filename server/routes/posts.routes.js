const express = require('express')
const Posts = require('../models/Posts')
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const router = express.Router();

cloudinary.config({
    cloud_name: 'deydksecv',
    api_key: '813684313636543',
    api_secret: '0QotBFR0UhM66zGxIDKdMrCuctY'
});

const storage = multer.diskStorage({});
const upload = multer({ storage })



router.post('/admin/addpost', upload.single('image'), async (req, res) => {
    try {
        const { caption } = req.body;
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            transformation: [
                { width: 500, height: 500, crop: 'fill', gravity: 'auto' },
                { quality: 'auto:best' }
            ],
            folder: 'Posts'
        });

          const newPost = new Posts({
            caption,
            imgUrl: uploadResult.secure_url
        });

        const savedPost = await newPost.save();

        res.json(savedPost);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}
)



router.get('/', async (req,res)=>{
   try
   {
    const posts = await Posts.find();
    res.status(200).json(posts)
   }
   catch(err)
   {
    res.status(500).json(err);
   }
})

//delete posts
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
  
    try {
      await Posts.findByIdAndDelete(id);
  
      res.status(200).json({ status: "Post deleted successfully with id " + id })
    }
    catch (err) {
      res.json(500).json(err)
    }
  })


//update post
router.put('/update/:id', (req,res)=>{
  const {id} = req.params;
  const updatedData = req.body;

  Posts.findByIdAndUpdate(id, updatedData, {new : true})
  .then((updatedDocument) => {
    res.status(200).json(updatedDocument);
  })
  .catch((err) => {
    console.error('Error updating document:', err);
    res.status(500).json({ error: 'Failed to update document' });
  });
})





module.exports = router