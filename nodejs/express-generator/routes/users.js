var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get(
  "/",
  function(req, res, next) {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  function(req, res, next) {
    console.log("Request Type:", req.method);
    if (!req.cookies.token) {
      res.redirect("/");
    }
    res.render("users", { title: "User" });
  }
);

module.exports = router;
