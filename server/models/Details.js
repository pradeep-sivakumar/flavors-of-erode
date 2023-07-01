const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    email : String,
    address : String,
    weekDayStartTime : String,
    weekDayCloseTime : String,
    weekEndStartTime : String,
    weekEndCloseTime : String,
    phoneNumber : Number,
    facebookURL : String,
    instagramURL : String,
    whatsappURL : String,
    city : String,
    landmark : String
}, {timestamps: true})


const DetailsModel = mongoose.model('shopdetails', detailSchema);
module.exports =  DetailsModel;