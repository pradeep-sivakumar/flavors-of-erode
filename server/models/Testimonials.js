const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    customerName : {
        type : String,
        required : true
    },
    customerLocality : {
        type : String,
        required : true
    },
    testimonial : {
        type : String,
        required : true
    },
    givenTime : {
        type : String,
        required : true
    },
    ratings : {
        type : Number,
        required : true,
        min : 1,
        max : 5
    },
}, {timestamps: true})

module.exports = mongoose.model('testimonialslist', testimonialSchema);