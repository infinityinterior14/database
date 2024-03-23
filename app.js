var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var signupRouter = require("./routes/signup");
var serviceRouter = require("./routes/service");
var contactRouter = require("./routes/contact");
var galleryRouter = require("./routes/gallery");
var teamRouter = require("./routes/team");
var blogRouter = require("./routes/blog");
var testimonialrouter = require("./routes/testimonial");
var bloggridrouter = require("./routes/bloggrid");
// var reviewrouter = require('./routes/review');
var newsletterrouter = require("./routes/newsletter");
var orderRouter = require("./routes/order");
var adminRouter = require("./routes/admin");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://drashti:drashti410@drashtimalaviya.lrqxcra.mongodb.net/interior"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err.message);
  });

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/service", serviceRouter);
app.use("/contact", contactRouter);
app.use("/gallery", galleryRouter);
app.use("/team", teamRouter);
app.use("/testimonial", testimonialrouter);
app.use("/blog", blogRouter);
app.use("/bloggrid", bloggridrouter);
// app.use('/review', reviewrouter);
app.use("/newsletter", newsletterrouter);
app.use("/order", orderRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
