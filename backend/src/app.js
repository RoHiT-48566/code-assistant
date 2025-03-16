const express = require("express");

const aiRoutes = require("./routes/ai.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/ai", aiRoutes);

module.exports = app;
