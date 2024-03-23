var express = require('express');
var router = express.Router();
var GALLERY = require("../model/gallery");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/add', upload.single("img"), async function (req, res, next) {

    try {
        if (!req.file || !req.body.cat || !req.body.hed) {
            throw new Error("data did not match")
        }
        req.body.img = req.file.filename;
        const datas = await GALLERY.create(req.body);
        console.log(datas);
        res.status(201).json({
            status: "data successfully added!",
            massage: "success",
            data: datas,
        })
    }
    catch (error) {
        res.status(404).json({
            status: "no data found",
            massage: error.message
        })
    }

});
router.get('/view', async function (req, res, next) {
    const datas = await GALLERY.find(req.body);
    console.log(datas);
    try {
        res.status(201).json({
            status: "data successfully view!",
            massage: "success",
            data: datas,
        })
    }
    catch (error) {
        res.status(404).json({
            status: "no data found",
            massage: error.message
        })
    }

});
router.put('/update/:id', upload.single("img"), async function (req, res, next) {


    try {
        if (!req.file || !req.body.cat || !req.body.hed) {
            throw new Error("Data did Not Match")
        }
        req.body.img = req.file.filename;
        id = req.params.id
        u_data = req.body
        const datas = await GALLERY.findByIdAndUpdate(id, u_data);
        console.log(datas);
        res.status(201).json({
            status: "Data Successfully update!",
            message: "success",
            data: datas
        })
    }
    catch (error) {
        res.status(404).json({
            status: "No Data Found ",
            message: error.message
        })
    }
});
router.delete('/delete/:id', async function (req, res, next) {
    id = req.params.id
    d_data = req.body
    const datas = await GALLERY.findByIdAndDelete(id, d_data);
    console.log(datas);
    try {
        res.status(201).json({
            status: "Data Successfully deleted!",
            message: "success",
            data: datas
        })
    }
    catch (error) {
        res.status(404).json({
            status: "No Data Found ",
            message: error.message
        })
    }
});


module.exports = router;
