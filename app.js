const express = require("express");
const app = express();
const port = 3000;

const hbs = require("hbs");
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(port);
});
