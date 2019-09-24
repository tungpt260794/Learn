var express = require("express");
const Post = require("@models/Post");
const html2pug = require("html2pug");

var router = express.Router();

router.get("/:id", async (req, res, next) => {
  let post = await Post.findOne({ _id: req.params.id });
  console.log(post);
  res.render("post", {
    title: "Bài viết",
    bannerUrl: "/images/post-bg.jpg",
    post
  });
});

module.exports = router;
