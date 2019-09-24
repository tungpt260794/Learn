var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("contact", {
    title: "Liên hệ",
    bannerUrl: "/images/contact-bg.jpg",
    bannerHead: "Contact Me",
    bannerSubHead: "Have questions? I have answers"
  });
});

module.exports = router;
