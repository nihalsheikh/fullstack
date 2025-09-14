// 1. require express
const express = require("express");
const app = express();

// 2. require mongoose for db
const mongoose = require("mongoose");

// 6.6 require out model
const Listing = require("./models/listing.js");

// 8.3 require ejs path for showcasing our data in a template
const path = require("path");

// 3. start server
app.listen(8080, () => {
	console.log("server is listening to port 8080");
});

// 8.4 set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 9.2 Listing visiting URL Encoded
app.use(express.urlencoded({ extended: true }));

// 4. create an API
// 4.1 get request
app.get("/", (req, res) => {
	res.send("This is root or home route");
});

// 6.5 -> 4.2 test your db model connection
// app.get("/testListing", async (req, res) => {
// 	let sampleListing = new Listing({
// 		title: "Sample Title",
// 		description: "Sunt irure qui veniam non sunt proident ea aliqua.",
// 		price: 3400,
// 		location: "Lonavala, Maharashtra",
// 		country: "India",
// 	});

// 	await sampleListing.save();
// 	console.log("sample listing was saved");
// 	res.send("successful testing")

// });

// 8. Show All Route:
// 8.1 Index Route: Show all the listings
app.get("/listings", async (req, res) => {
	const allListings = await Listing.find({});
	res.render("listings/index.ejs", { allListings });
});

// Placing step 10 above step 9: it was causing error, in which link was confused between "/new" and "/:id"
// 10 NEW and CREATE Route
// 10.1 NEW Route: to create a new listing go to a form
app.get("/listings/new", (req, res) => {
	res.render("listings/new.ejs");
});

// 9. Single Listing Route
// 9.1 Show Route: Show data for the listing clicked/visited
app.get("/listings/:id", async (req, res) => {
	let { id } = req.params;

	// 9.3 Find the listing in db
	const listing = await Listing.findById(id);

	// 9.4 Render the lisitng details in EJS template
	res.render("listings/show.ejs", { listing });
});

// 10.2 CREATE Route: to accept a POST request, that will make changes into our db
app.post("/listings", async (req, res) => {
	// let { title, description, image, price, location, country } = req.body;
	const newListing = new Listing(req.body.listing);
	await newListing.save();
	// console.log(listing);
	res.redirect("/listings");
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
