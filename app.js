const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");

//TEMPLATE CONFIG
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

//ROUTING
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

//KICKSTART PHASE
app.listen(port, () => {
  console.log(port);
});
