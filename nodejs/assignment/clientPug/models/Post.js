const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String
  },
  content: { type: String, required: true }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
