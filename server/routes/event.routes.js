const express = require('express')
const Events = require('../models/Events')
const router = express.Router()

router.get('/',async (req,res)=>{
    try{
        const events = await Events.find();
        res.status(200).json(events)
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})

router.post('/add',async (req,res)=>{
    try{
        const {customerName, customerEmail, customerPhone, dateRequested, totalGuests, eventTime, eventDetails} = req.body;
        const newEvent = {
            customerName, customerEmail, customerPhone, dateRequested, totalGuests, eventTime, eventDetails
        }
        const events = await Events.create(newEvent)
        res.status(200).json(events)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

//delete event
router.delete('/delete/:id', async (req,res)=>{
    const {id} = req.params;
    try{
        Events.findByIdAndDelete(id);

        res.status(200).json({status : "Successfully deleted the event with id " + id})
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

module.exports = router;