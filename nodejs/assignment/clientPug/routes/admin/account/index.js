const express = require("express");
const Account = require("@models/Account");
const Status = require("@models/Status");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const accounts = await Account.find().populate({
    path: "status",
    populate: { path: "status" }
  });
  console.log(accounts);
  res.render("admin/account", { baseUrl: req.baseUrl, accounts });
});

module.exports = router;
