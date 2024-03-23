const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TESTIMONIAL_Schema = new Schema({
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
});
const TESTIMONIAL = mongoose.model("testimonial", TESTIMONIAL_Schema)
module.exports = TESTIMONIAL;