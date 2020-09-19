const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");

//TEMPLATE CONFIG
app.set("view engine", "hbs"); //To register hbs engine with the express app
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public")); //Set the public folder(where browser can download from)

//ROUTING
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.get("/photo", (req, res) => {
  res.render("photo");
});

//KICKSTART PHASE
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
