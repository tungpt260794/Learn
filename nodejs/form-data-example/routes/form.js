var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
// // for parsing application/json
// router.use(bodyParser.json());
// // for parsing application/xwww-
// router.use(bodyParser.urlencoded({ extended: true }));
// // for parsing multipart/form-data
// router.use(upload.array());

router.get("/", (req, res, next) => {
  res.render("form", { title: "My form" });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.send("recieved your request!");
});

module.exports = router;
