const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    dishName : {
        type : String,
        required : true
    },
    bestSeller : {
        type : Boolean,
        default : false
    },
    recommended : {
        type : Boolean,
        default : false
    },
    markPrice : {
        type : Number,
        required : true
    },
    sellPrice : {
        type : Number,
        required : true
    },
    variety : {
        type : String,
        required : true,
    },
    veg : {
        type : Boolean,
        required : true
    }, 
    imgURL : {
        type : String,
        required : true
    },
    ratings : {
        type : Number,
        required : true,
        min : 1,
        max : 5
    },
    available : {
        type : Boolean,
        required : true
    }
}, {timestamps: true})

module.exports = mongoose.model('disheslists', dishSchema);