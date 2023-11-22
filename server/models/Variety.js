const mongoose = require('mongoose');

const varietySchema = new mongoose.Schema({
    varietyName : {
        type : String,
        required: true
    }
}, {timestamps: true})

module.exports = VarietyModal = mongoose.model('dishvarieties', varietySchema);