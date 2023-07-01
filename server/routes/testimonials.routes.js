const express = require('express')
const router = express.Router()
const Testimonials = require('../models/Testimonials')

router.get('/',async (req,res)=>{
    try
    {
        const testimonials = await Testimonials.find();
        res.status(200).json(testimonials)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

router.post('/admin/add',async (req,res)=>{
    try{
        const {customerName, customerLocality, testimonial, givenTime, ratings} = req.body;

    const newTestimonial = {
        customerName,
        customerLocality,
        testimonial,
        givenTime,
        ratings
    }

    const createdTestimonial = await Testimonials.create(newTestimonial)
    res.status(200).json(createdTestimonial);
    }
    catch(err){
        res.status(500).json(err)
    }
})


//delete testimonial
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
  
    try {
      await Testimonials.findByIdAndDelete(id);
  
      res.status(200).json({ status: "Testimonials deleted successfully with id " + id })
    }
    catch (err) {
      res.json(500).json(err)
    }
  })


//updating testimonial
router.put('/update/:id', (req, res) => {
    const documentId = req.params.id;
    const updatedData = req.body;
  
    Testimonials.findByIdAndUpdate(documentId, updatedData, { new: true })
      .then((updatedDocument) => {
        res.status(200).json(updatedDocument);
      })
      .catch((err) => {
        console.error('Error updating document:', err);
        res.status(500).json({ error: 'Failed to update document' });
      });
  })


module.exports = router;