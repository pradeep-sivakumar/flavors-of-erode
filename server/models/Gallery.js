const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
    imgURL : {
        required : true,
        type : String
    },
    imgTitle : {
        type : String,
        required : true
    },
    featured : {
        type : Boolean,
        default : false
    }
}, {timestamps: true})

module.exports = mongoose.model('galleryImages', galleryImageSchema);