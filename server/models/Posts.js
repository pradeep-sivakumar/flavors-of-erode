const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    showPost : {
        type : Boolean,
        default : true
    },
    imgUrl : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date, //add logic in the backend to add date and the time
        default : ()=>Date.now(),
        immutable:true
    },
    caption : {
        type : String,
        required : true
    },
}, {timestamps: true})

module.exports = mongoose.model('Posts', postSchema);