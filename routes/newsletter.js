var express = require("express");
var router = express.Router();
var NEWSLETTER = require("../model/newsletter");

router.post("/add", async function (req, res, next) {
  try {
    if (!req.body.name || !req.body.email) {
      throw new Error("data did not match");
    }
    const datas = await NEWSLETTER.create(req.body);
    console.log(datas);
    res.status(201).json({
      status: "data successfully added!",
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
router.get("/view", async function (req, res, next) {
  const datas = await NEWSLETTER.find(req.body);
  console.log(datas);
  try {
    res.status(201).json({
      status: "data successfully added!",
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
router.put("/update/:id", async function (req, res, next) {
  id = req.params.id;
  u_data = req.body;
  const datas = await NEWSLETTER.findByIdAndUpdate(id, u_data);
  console.log(datas);
  try {
    if (!req.body.name || !req.body.email) {
      throw new Error("Data did Not Match");
    }
    res.status(201).json({
      status: "Data Successfully update!",
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
router.delete("/delete/:id", async function (req, res, next) {
  id = req.params.id;
  d_data = req.body;
  const datas = await NEWSLETTER.findByIdAndDelete(id, d_data);
  console.log(datas);
  try {
    res.status(201).json({
      status: "Data Successfully deleted!",
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
