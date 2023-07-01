const express = require('express')
const Variety = require('../models/Variety')
const router = express.Router()

router.get('/',async (req,res)=>{
    try{
        const variety = await Variety.find();
        res.status(200).json(variety)
    }
    catch(err)
    {
        res.status(404).json(err);
    }
})

router.post('/add',async (req,res)=>{
    try{
        const {varietyName} = req.body;

        const newVariety = new Variety({
            varietyName
        });

        const variety = await newVariety.save()
        res.status(200).json(variety)
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

//delete variety
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
  
    try {
      await Variety.findByIdAndDelete(id);
  
      res.status(200).json({ status: "Variety deleted successfully with id " + id })
    }
    catch (err) {
      res.json(500).json(err)
    }
  })




module.exports = router;