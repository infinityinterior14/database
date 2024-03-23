const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const GELLERY_Schema = new Schema({
    img: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    
    hed: {
        type: String,
        required: true,
        trim: true
    }
});

const GELLERY = mongoose.model("gellery", GELLERY_Schema)
module.exports = GELLERY;