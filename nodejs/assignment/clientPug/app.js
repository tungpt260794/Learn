var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const requireLogin = require("./helpers/require-login");
require("module-alias/register");
require("./db");
require("@helpers/insert-default-status");

// require blog routes
var indexRouter = require("./routes/index");
var aboutRouter = require("./routes/about");
var contactRouter = require("./routes/contact");
var postRouter = require("./routes/post");
var uploadImageRouter = require("./routes/upload-image");

// require admin routes
var adLoginRouter = require("./routes/admin/login");
var adLogoutRouter = require("./routes/admin/logout");
var adIndexRouter = require("./routes/admin/index");
var adAccountRouter = require("./routes/admin/account/index");
var adAccountCreateRouter = require("./routes/admin/account/create");
var adPostCreateRouter = require("./routes/admin/post/create");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: false, resave: true })
);
app.use(express.static(path.join(__dirname, "public")));

// blog routes
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/post", postRouter);
app.use("/upload-image", uploadImageRouter);

// admin routes
app.use("/admin/login", adLoginRouter);
app.use("/admin/logout", adLogoutRouter);
app.use("/admin", requireLogin, adIndexRouter);
app.use("/admin/account", requireLogin, adAccountRouter);
app.use("/admin/account/create", requireLogin, adAccountCreateRouter);
app.use("/admin/post/create", requireLogin, adPostCreateRouter);

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
