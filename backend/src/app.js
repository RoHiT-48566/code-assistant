const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

module.exports = app;
