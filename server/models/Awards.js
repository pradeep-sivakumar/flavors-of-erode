const mongoose = require('mongoose');

const AwardSchema = new mongoose.Schema({
    awardName  : {
        type : String,
        required : true
    },
}, {timestamps: true});

module.exports = mongoose.model('awards', AwardSchema);