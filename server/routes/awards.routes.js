const express = require('express');
const Awards = require('../models/Awards');
const router = express.Router()

//get all awards
router.get('/', async (req,res)=>{
    try
    {
        const awards = await Awards.find();

        res.status(200).json(awards)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})




//post new award
router.post('/add', async (req, res)=>{
    try{
        const {awardName} = req.body;
        const newAward = {awardName};
        const awards = await Awards.create(newAward)

        res.status(200).json(awards);
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})


//delete awards
router.delete('/delete/:id', async (req,res)=>{
    try{
        const {id} = req.params;

        const awards = await Awards.findByIdAndDelete(id)

        res.status(200).json(awards)
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

//update award
router.put('/update/:id', async (req,res)=>{
        const {id} = req.params;
        const updatedData = req.body;
        Awards.findByIdAndUpdate(id, updatedData, {new : true})
        .then((updatedDocument) => {
          res.status(200).json(updatedDocument);
        }) 
        .catch((err) => {
          console.error('Error updating document:', err);
          res.status(500).json({ error: 'Failed to update document' });
        });
})


module.exports = router;