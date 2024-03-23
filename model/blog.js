const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BLOG_Schema = new Schema({
  img: {
    type: String,
    required: true,
    trim: true,
  },
  hed: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
});
const BLOG = mongoose.model("blog", BLOG_Schema);
module.exports = BLOG;
