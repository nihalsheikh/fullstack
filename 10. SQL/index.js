// Node with SQL
// creating random data from faker
const { faker } = require("@faker-js/faker");
// connecting node with db
const mysql = require("mysql2");
// for crud ops express
const express = require("express");
const app = express();

// set page and the path
const path = require("path");

// method-override
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true})); // to parse form data

// Create the connection to database
const connection = mysql.createConnection({
	host: "localhost",
	user: "newuser",
	database: "delta",
	password: "mysql@123",
});

// generating random data
// When inserting data in bulk, return an Array instead of an object
let getRandomUser = () => {
	// create: id, name, email, password
	return [
		faker.string.uuid(),
		faker.internet.username(), // before version 9.1.0, use userName()
		faker.internet.email(),
		faker.internet.password(),
	];
};

// use connection methods to check or making chnages to DB
// Exception Handling: write  in try catch block, we never know what may go wrong
// we can write query else where and then pass it to our query connection method
// this is the SQL QUERY for inserting multiple values
// let query = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for(let i=1; i<=100; i++) {
//     // here we get 100 random fake user data in arr form
//     data.push(getRandomUser());
// }

// Home Page route
app.get("/", (req, res) => {
	let query = "SELECT count(*) FROM user";

	try {
		connection.query(query, (err, result) => {
			if (err) throw err;
			// console.log(result[0]["count(*)"]);
			let count = result[0]["count(*)"];
			res.render("home.ejs", {count})
		});
	} catch (err) {
		console.log(err);
		res.send("Some error in DB")
	}
});

// Show users route
app.get("/user", (req, res) => {
	// query to show all user only data
	let query = "SELECT * FROM user";
	try {
		connection.query(query, (err, users) => {
			if (err) throw err;
			res.render("user.ejs", { users });
		});
	} catch (err) {
		console.log(err);
		res.send("Some error in DB");
	}
});

// Edit Username Route
app.get("/user/:id/edit", (req, res) => {
	let { id } = req.params;
	// find the data for the id we want to edit
	let query = `SELECT * FROM user WHERE id='${id}'`;
	try {
		connection.query(query, (err, result) => {
			if (err) throw err;
			let user = result[0];
			res.render("edit.ejs", { user });
		});
	} catch (err) {
		console.log(err);
		res.send("Some error in DB");
	}
});

// Update in DB
app.patch("/user/:id", (req, res) => {
	let { id } = req.params;
	let {password: formPass, username: newUsername} = req.body;
	// find the data for the id we want to edit
	let query = `SELECT * FROM user WHERE id='${id}'`;
	try {
		connection.query(query, (err, result) => {
			if (err) throw err;
			let user = result[0];

			if(formPass != user.password) {
				res.send("Incorrect Password")
			} else {
				let query2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
				connection.query(query2, (err, result) => {
					if (err) throw err;
					res.redirect("/user")
				})
			}
		});
	} catch (err) {
		console.log(err);
		res.send("Some error in DB");
	}
})

// start server
app.listen("8080", () => {
	console.log("listening on port 8080");
});
