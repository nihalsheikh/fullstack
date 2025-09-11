const express = require("express");

// convention  to store express function's output in app variable
// app is an object
const app = express();

// 1. Listen to the incoming request
let port = 3000; // or other port, ex: 8080

app.listen(port, () => { // .listen method takes 2 args/params: a Port and a Function
    console.log(`app is listening on port ${port}.`);
});

app.get("/", (req, res) => {
    console.log("GET request recieved");
    res.send("This is the root page");
});

// app.get("*", (req, res) => {
//     console.log("GET request recieved");
//     res.status(404).send("Error 404: Page Not Found!");
// });

app.post("/", (req, res) => {
    console.log("POST request received")
    res.send("you sent a post request")
})

// We can send only one response for a request
// app.use((req, res) => {
//     // console.log(req); // to check the object received from req
//     console.log("request received");
//     res.send("This is a response to request"); // send a http res
// })

// Path Paramaeters
app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    let {username, id} = req.params;
    res.send(`Print the path paramas @${username} and id:${id}`);
})

// Query Strings
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no results...");
})
