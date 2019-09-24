var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoClient = require("./mongodb");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var formRouter = require("./routes/form");

var app = express();

const assert = require("assert");
const insertPosts = (db, callback) => {
  // Get documents collection
  const collection = db.collection("post");
  // Insert some documents
  const posts = [
    {
      title: "MongoDB Overview",
      description: "MongoDB is no sql datatbase",
      by: "VTC Academy",
      url: "http://www.vtc.ac.vn",
      tags: ["mongodb", "database", "NoSQL"],
      like: 100
    },
    {
      title: "MongoDB Overview 1",
      description: "MongoDB is no sql datatbase 1",
      by: "VTC Academy 1",
      url: "http://www.vtc.ac.vn1",
      tags: ["mongodb", "database", "NoSQL"],
      like: 101
    }
  ];

  collection.insertMany(posts, (err, result) => {
    assert.equal(err, null);
    assert.equal(posts.length, result.result.n);
    assert.equal(posts.length, result.ops.length);
    console.log("Inserted 2 posts into the collection");
    callback(result);
  });
};

mongoClient.execute(db => {
  console.log(db);
  insertPosts(db, result => {
    console.log(result);
  });
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/form", formRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
