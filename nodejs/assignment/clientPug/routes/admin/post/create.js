const express = require("express");
const Post = require("@models/Post");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("admin/post/create", { baseUrl: req.baseUrl });
});

router.post("/", async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const subTitle = req.body.subTitle;

  try {
    if (title && content) {
      // await Account.createIndexes();
      const post = await Post.create({ title, content, subTitle });
      res.json({ status: "success", data: post });
      return res.end();
    }

    throw new Error("not enough information");
  } catch (e) {
    res.json({ status: "error", message: e.message });
  }
});

module.exports = router;
