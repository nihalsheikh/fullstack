// 1. require express
const express = require("express");
const app = express();

// 2. require mongoose for db
const mongoose = require("mongoose");

// 3. start server
app.listen(8080, () => {
	console.log("server is listening to port 8080");
});

// 4. create an API
// 4.1 get request
app.get("/", (req, res) => {
	res.send("This is root or home route");
});

// 5. database connection
// 5.1 test db connection in terminal. make sure it's enabled and started
/* 5.2 make a test url for application and pass this variable to mongoose.connect
		you can get this url from mongoose website
*/
const MONGO_URL = "mongodb://127.0.0.1:27017/dwellings";

// 5.3 make async func with name 'main' and connect mongoose
async function main() {
	await mongoose.connect(MONGO_URL);
}

// 5.4 call the main function
main()
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch((err) => {
		console.log(err);
	});
