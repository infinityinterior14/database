var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const ADMIN = require("../model/admin");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "drashtimalaviya202@gmail.com",
    pass: "dzbciqhefpokyzrg",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "drashtimalaviya202@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);

router.post("/signup", async function (req, res, next) {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      throw new Error("Data did Not Match");
    }
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const datas = await ADMIN.create(req.body);
    main(datas.email);
    console.log(datas);
    res.status(201).json({
      status: "user signup Successfully",
      message: "success",
      data: datas,
    });
  } catch (error) {
    res.status(404).json({
      status: "No Data Found ",
      message: error.message,
    });
  }
});
router.get("/view", async function (req, res, next) {
  const datas = await ADMIN.find(req.body);
  console.log(datas);
  try {
    res.status(201).json({
      status: "data successfully view!",
      massage: "success",
      data: datas,
    });
  } catch (error) {
    res.status(404).json({
      status: "no data found",
      massage: error.message,
    });
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const datas = await ADMIN.findOne({ email: req.body.email });
    console.log(datas);
    const check = await bcrypt.compare(req.body.password, datas.password);

    if (!check) {
      throw new Error("Enter Valid Password");
    }
    res.status(201).json({
      status: "user login successfully",
      message: "success",
      data: datas,
    });
  } catch (error) {
    res.status(404).json({
      status: "No Data Found ",
      message: error.message,
    });
  }
});
module.exports = router;
