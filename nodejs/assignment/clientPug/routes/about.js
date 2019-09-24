var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("about", {
    title: "Về tôi",
    bannerUrl: "/images/about-bg.jpg",
    bannerHead: "Về tôi",
    bannerSubHead: "Phan Thanh Tùng"
  });
});

module.exports = router;
