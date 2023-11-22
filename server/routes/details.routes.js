const express = require('express')
const router = express.Router()

const DetailsModel = require('../models/Details')

// get
router.get('/', async (req, res) => {
  try {
  
    const details = await DetailsModel.findOne();
    res.json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})


router.put('/:id', (req, res) => {
  const documentId = req.params.id;
  const updatedData = req.body;

  DetailsModel.findByIdAndUpdate(documentId, updatedData, { new: true })
    .then((updatedDocument) => {
      res.status(200).json(updatedDocument);
    })
    .catch((err) => {
      console.error('Error updating document:', err);
      res.status(500).json({ error: 'Failed to update document' });
    });
})



module.exports = router;