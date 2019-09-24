const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const accounts = [{ username: "admin", password: "123456" }];

/* GET home page. */
router.get("/", function(req, res, next) {
  if (req.cookies.token) {
    const acc = jwt.verify(req.cookies.token, process.env.PRIVATE_KEY);
    const accs = accounts.filter(
      _acc => _acc.username === acc.username && _acc.password === acc.password
    );

    if (accs && accs.length > 0) {
      return res.redirect("/users");
    }
  }
  res.render("index", { title: "Express" });
});

/* POST login */
router.post("/", (req, res, next) => {
  const accs = accounts.filter(
    _acc =>
      _acc.username === req.body.username && _acc.password === req.body.password
  );

  if (accs && accs.length > 0) {
    const token = jwt.sign(req.body, process.env.PRIVATE_KEY);
    res.end(JSON.stringify({ token }));
  } else {
    res.end(JSON.stringify({ token: null }));
  }
});

module.exports = router;
