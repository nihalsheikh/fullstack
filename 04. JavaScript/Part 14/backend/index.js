const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Port ${port} active`)
})

// Handling POST Request
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// GET request
app.get("/register", (req, res) => {
    let {user, password} = req.query; // accessing the data we assed throught he html form
    res.send(`standard GET response. Welcome ${user}!`)
})

// POST Request
app.post("/register", (req, res) => {
    let {user, password} = req.body; // to print the object passed on the route
    res.send(`standard POST response. Welcome ${user}!`)
})
