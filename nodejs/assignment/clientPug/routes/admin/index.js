var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  console.log(req.baseUrl);
  res.render("admin", { baseUrl: req.baseUrl });
});

module.exports = router;
