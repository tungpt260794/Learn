const express = require("express");
const bcrypt = require("bcrypt");
const Account = require("@models/Account");
const Status = require("@models/Status");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const listStatus = await Status.find();
  console.log(listStatus);
  res.render("admin/account/create", { baseUrl: req.baseUrl, listStatus });
});

router.post("/", async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;
  const status = req.body.status;

  try {
    if (username && password && passwordConfirm) {
      if (password === passwordConfirm) {
        console.log(password);
        const hashCode = await bcrypt.hash(password, 10);
        const account = await Account.create({
          username,
          password: hashCode,
          status
        });
        res.json({ status: "success", data: account });
        return res.end();
      }

      throw new Error(
        "the password and confirmation password are not the same"
      );
    }

    throw new Error("not enough information");
  } catch (e) {
    res.json({ status: "error", message: e.message });
  }
});

module.exports = router;
