const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SERVICE_Schema = new Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  // bloggrid_ref: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'price',
  //     required: true
  // },
  // token: {
  //     type:String,
  //     required:true
  // }
});

const SERVICE = mongoose.model("service", SERVICE_Schema);
module.exports = SERVICE;
