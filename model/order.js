const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ORDER_Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  service: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  datetime: {
    type: Date,
    default: Date.now,
  },
  msg: {
    type: String,
    required: true,
    trim: true,
  },
});
const ORDER = mongoose.model("order", ORDER_Schema);
module.exports = ORDER;
