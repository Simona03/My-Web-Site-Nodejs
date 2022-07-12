// Imports
const express = require("express");
const app = express();
const port = process.env.PORT || 2500;

// Static Files
app.use(express.static("tools"));

// Set View's
app.set("views", "views");
app.set("view engine", "ejs");

// Navigation
app.get("", (req, res) => {
  res.render("index");
});


app.listen(port, () => console.info(`App listening on port ${port}`));