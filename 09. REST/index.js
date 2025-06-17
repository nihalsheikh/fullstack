// Quora Page: Understanding RESTful API
// require Express
const express = require("express");
const app = express();

// define port
const port = 8080;

// define path for EJS
const path = require("path");

// define middleware
app.use(express.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "ejs");

// set path for views folder
app.set("views", path.join(__dirname, "views"));

// set path for public folder
app.set(express.static(path.join(__dirname, "public")));

// make sure port is running and active
app.listen(port, (req, res) => {
    console.log(`listening on Port ${port}`)
})


// very basic GET Request
app.get("/", (req, res) => {
    res.send("Root Page, server is running...")
})
