const express = require("express");
const app = express();
const path = require("path"); // accessing paths: views folder

const port  = 8080;

// Using EJS
app.set("view engine", "ejs");

// accessing paths: views folder from anywhere within the parent directory
app.set("views", path.join(__dirname, "/views"))

// rendering the ejs template
app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.listen(port, () => {
    console.log("Port 8080 active")
})
