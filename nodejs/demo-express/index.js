const express = require("express");
const app = express();
const things = require("./things");

app.get("/", (req, res) => {
  res.send("<h1>Hello world!");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/hello", (req, res) => {
  res.send("you just called the post method at '/hello'!\n");
});

app.all("/test", (req, res) => {
  res.send("HTTP method doesn't have any effect on this router...");
});

app.use("/things", things);

app.listen(3000, () => {
  console.log("ready port 3000 ...");
});
