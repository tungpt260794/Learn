var express = require("express");
const Post = require("@models/Post");
const html2pug = require("html2pug");

var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const posts = await Post.find();
  console.log(posts);

  res.render("index", {
    title: "Trang chủ",
    bannerUrl: "/images/home-bg.jpg",
    bannerHead: "Blog của tôi",
    bannerSubHead: "Chao xìn !",
    posts
  });
});

module.exports = router;
