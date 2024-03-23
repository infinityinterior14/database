const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BLOGGRID_Schema = new Schema({

    img: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    }

});
const BLOGGRID = mongoose.model('bloggrid', BLOGGRID_Schema)
module.exports = BLOGGRID;