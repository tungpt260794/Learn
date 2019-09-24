const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  status: String,
  meta: {
    votes: Number,
    favs: Number
  }
});

blogSchema.index({ title: 1, date: -1 });

module.exports = mongoose.model("Post", blogSchema);
