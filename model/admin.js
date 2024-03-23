const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ADMIN_Schema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});
const ADMIN = mongoose.model("admin", ADMIN_Schema);
module.exports = ADMIN;
