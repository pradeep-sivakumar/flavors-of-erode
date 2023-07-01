const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    customerName : {
        type : String,
        required : true
    },
    customerEmail : {
        type : String,
        required : true
    },
    customerPhone : {
        type : Number,
        required : true
    },
    dateRequested : {
        type : String,
        required : true
    },
    totalGuests : {
        type : Number,
        required : true
    },
    eventTime : {
        type : String,
        required : true
    },
    eventDetails : {
        type : String,
        required : true
    },
    submittedAt : {
        type : Date,
        default : ()=>Date.now()
    }
}, {timestamps: true});

module.exports = mongoose.model('eventsList', eventSchema);