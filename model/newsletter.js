
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const NEWSLETTER_Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
    
});
const NEWSLETTER = mongoose.model("newsletter", NEWSLETTER_Schema)
module.exports = NEWSLETTER;