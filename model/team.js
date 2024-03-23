const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const TEAM_Schema = new Schema({
    img: {
        type: String,
        required: true,
        trim: true
    },
    teamname: {
        type: String,
        required: true,
        trim: true
    },
    filedname: {
        type: String,
        required: true,
        trim: true
    }
});

const TEAM = mongoose.model("team", TEAM_Schema)
module.exports = TEAM;