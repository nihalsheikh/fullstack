// Using MongoDB with JS using Mongoose
// require mongoose
const mongoose = require('mongoose');
//using mongoose
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    // the follwoing is a asynchronous function, when executed, it waits for a promise to return
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// creating schema for out collection
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// Model in mongoose
// model name is same as collection name, we pass collection and schema to this method
const User = mongoose.model("User", userSchema)

// insert one data at a time with the following, only doing this is not enough, use save method
const user2 = new User({
    name: "Jack",
    email: "jack@xyz.com",
    age: 27,
});

// to save the data, use save method, this is also an asynchrns method
user2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})
