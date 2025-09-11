// Quora Page: Understanding RESTful API
// require Express
const express = require("express");
const app = express();

// define port
const port = 8080;

// define path for EJS
const path = require("path");

// UUID for every post
const {v4: uuidv4} = require("uuid");

// Overwriting the POST request to PATCH to edit HTML form
let methodOverride = require("method-override")
app.use(methodOverride("_method"))

// define middleware
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set path for views folder
app.set("views", path.join(__dirname, "views"));

// set path for public folder: CSS File
app.use(express.static(path.join(__dirname, "public")));

// make sure port is running and active
app.listen(port, (req, res) => {
    console.log(`listening on Port ${port}`)
});

// We are not using and database, so we are making our own data, using arrays
// we want our DB to be able to handle changes, so we use 'let' and not 'const'
let posts = [
    {
        id: uuidv4(), // makes unique string id's,
        username: "johnwick",
        content: "am I still ex-communicado"
    },
    {
        id: uuidv4(),
        username: "joemama",
        content: "the joke never expires"
    },
    {
        id: uuidv4(),
        username: "some.developer",
        content: "man, when will i get a job???"
    },
    {
        id: uuidv4(),
        username: "recruiter",
        content: "we gonna farm reaches and view and not give jobs"
    },
];

// new GET Request to set-up our posts
// resource: things/objects on which we perform out CRUD operations
// make sure the name of the route you set is a 'noun' and not a 'verb' ex: posts and not viewPost or seepost
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})

// very basic GET Request
app.get("/", (req, res) => {
    res.render("home.ejs")
});

// New Post Creation
app.get("/posts/new", (req, res) => { // first create a form to write a post
    res.render("newform.ejs")
})

app.post("/posts", (req, res) => { // after submit is clicked, post your content
    let {username, content} = req.body;
    let id = uuidv4(); // make new id's for new posts
    posts.push({ id, username, content });

    // To connect different pages we use 'redirect()'
    res.redirect("/posts")
})

// dummy settings page
app.get("/settings", (req, res) => {
    res.render("settings.ejs", { posts })
})

// Joining unique ID's with the posts
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post})
})

// Edit a post
app.patch("/posts/:id", (req, res) => {
    // ID's reset on server restart. Keep that in mind
    let { id } = req.params; // to get the id of post
    let newContent = req.body.content;

    // get the post and update the content
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    // console.log(post)
    res.redirect("/posts")
})

// setting new route to edit the posts
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post})
})

// Delete post route
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts")
})
