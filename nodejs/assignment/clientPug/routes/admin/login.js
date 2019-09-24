var express = require("express");
const Account = require("@models/Account");
const bcrypt = require("bcrypt");

var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("admin/login");
});

router.post("/", async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    if (username && password) {
      const account = await Account.findOne()
        .byUsername(username)
        .exec();

      const match = await bcrypt.compare(password, account.password);
      if (match) {
        req.session.accId = account._id;
        res.json({ status: "success", data: account });
        return res.end();
      }

      throw new Error("username or password wrong");
    }

    throw new Error("not enough information");
  } catch (e) {
    res.json({ status: "error", message: e.message });
  }
});

module.exports = router;
