// 7.2 create an index.js file
// write logic behind initialization
// 7.3 get mongoose
const mongoose = require("mongoose");

// 7.4 get the sameListing data here
const initData = require("./data.js");

// 7.5 get the Model
const Listing = require("../models/listing.js");

// 7.6 make the db connection
const MONGO_URL = "mongodb://127.0.0.1:27017/dwellings";

async function main() {
	await mongoose.connect(MONGO_URL);
}

main()
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch((err) => {
		console.log(err);
	});

// 7.7 add data to db after delete pre-existing data
const initDB = async () => {
	await Listing.deleteMany({}); // delete already exisiting data in db
	await Listing.insertMany(initData.data);

	console.log("data was initialized");
};

initDB();
