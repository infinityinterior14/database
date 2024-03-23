const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CONTACT_Schema = new Schema({
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
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    msg: {
        type: String,
        required: true,
        trim: true
    }
});
const CONTACT = mongoose.model("contact", CONTACT_Schema)
module.exports = CONTACT;