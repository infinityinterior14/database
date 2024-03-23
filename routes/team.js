var express = require("express");
var router = express.Router();
var TEAM = require("../model/team");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.post("/add", upload.single("img"), async function (req, res, next) {
  try {
    console.log(req.file);
    if (!req.file || !req.body.teamname || !req.body.filedname) {
      throw new Error("Data Did not match");
    }
    req.body.img = req.file.filename;
    const datas = await TEAM.create(req.body);
    console.log(datas);
    res.status(201).json({
      status: "Data Successfully added!",
      message: "success",
      data: datas,
    });
  } catch (error) {
    res.status(404).json({
      status: "No Data Found",
      message: error.message,
    });
  }
});

router.get("/view", async function (req, res, next) {
  const datas = await TEAM.find();
  console.log(datas);
  try {
    res.status(200).json({
      status: "Data Found",
      message: "success",
      data: datas,
    });
  } catch (error) {
    res.status(404).json({
      status: "No Data Found",
      message: error.message,
    });
  }
});

router.put(
  "/update/:id",
  upload.single("img"),
  async function (req, res, next) {
    try {
      if (!req.file || !req.body.teamname || !req.body.filedname) {
        throw new ERROR("Data Did Not Match");
      }
      req.body.img = req.file.filename;
      id = req.params.id;
      u_data = req.body;
      const datas = await TEAM.findByIdAndUpdate(id, u_data);
      console.log(datas);
      res.status(201).json({
        status: "Data Successfully added!",
        message: "success",
        data: datas,
      });
    } catch (error) {
      res.status(404).json({
        status: "No Data Found",
        message: error.message,
      });
    }
  }
);

router.delete("/delete/:id", async function (req, res, next) {
  id = req.params.id;
  u_data = req.body;
  const datas = await TEAM.findByIdAndDelete(id, u_data);
  console.log(datas);
  try {
    res.status(201).json({
      status: "Data Successfully deleted!",
      message: "success",
      // data: datas,
    });
  } catch (error) {
    res.status(404).json({
      status: "No Data Found",
      message: error.message,
    });
  }
});

module.exports = router;
