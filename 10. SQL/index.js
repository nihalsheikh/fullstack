// Node with SQL
// creating random data from faker
const { faker } = require("@faker-js/faker");
// connecting node with db
const mysql = require("mysql2");
// for crud ops express
const express = require("express");
const app = express();

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

// try {
//     connection.query(query, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//     })
// } catch (err) {
//     console.log(err);
// }

// ending connection with DB after we get our result
// connection.end()

// Home Page route
app.get("/", (req, res) => {
	let query = "SELECT count(*) FROM user";

	try {
		connection.query(query, (err, result) => {
			if (err) throw err;
			console.log(result[0]["count(*)"]);
			res.send("success");
		});
	} catch (err) {
		console.log(err);
		res.send("Some error in DB")
	}
});

// start server
app.listen("8080", () => {
	console.log("listening on port 8080");
});
