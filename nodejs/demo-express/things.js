const express = require("express");
const router = express.Router();

router.get("/:id([0-9]{5})", (req, res) => {
  console.log(req.params.id);
  res.send("GET router on things.");
});

router.get("*", (req, res) => {
  res.send("ERROR");
});

router.post("/", (req, res) => {
  res.send("POST router on things.");
});

module.exports = router;
