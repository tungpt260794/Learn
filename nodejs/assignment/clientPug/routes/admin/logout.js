var express = require("express");
const Account = require("@models/Account");
const bcrypt = require("bcrypt");

var router = express.Router();

router.get("/", function(req, res, next) {
  req.session.destroy(function(err) {
    if (err) {
      res.json({ status: "error", message: err.message });
    } else {
      res.json({ status: "success", data: true });
    }
    return res.end();
  });
});

module.exports = router;
