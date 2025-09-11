// 6. Create Models
// 6.1 Model: Listing
// Storing information related to the place in listing in db
// info type: title, description, image, price, loaction, country

// 6.2 require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 6.3 create a schema for db
const listingSchema = new Schema({
	title: {
		type: String, // name of place
		required: true,
	},
	description: String, // about place
	image: {
		type: String, // image link of place
		default: // set a default value of image
			"https://www.freepik.com/free-vector/tourist-tourist-character-with-backpack-map-camera-isolated-tourism-illustration-happy-woman-photographer-sightseeing-holiday-vacation-young-man-hat-with-luggage-hitchhiking-trekking_56728878.htm#fromView=keyword&page=1&position=4&uuid=9406f850-1359-4ab3-bdd9-7b39fe88c79c&query=Tourist+cartoon",
		set: (imgLink) =>
			imgLink === ""
				? "https://www.freepik.com/free-vector/tourist-tourist-character-with-backpack-map-camera-isolated-tourism-illustration-happy-woman-photographer-sightseeing-holiday-vacation-young-man-hat-with-luggage-hitchhiking-trekking_56728878.htm#fromView=keyword&page=1&position=4&uuid=9406f850-1359-4ab3-bdd9-7b39fe88c79c&query=Tourist+cartoon"
				: imgLink,
	},
	price: Number, // rent price of place
	location: String, // place address
	country: String, // home country of place
});

// 6.4 create model using the schema
const Listing = mongoose.model("Listing", listingSchema);

// 6.5 export model
module.exports = Listing;
