// Node with SQL

// creating random data from faker
const { faker } = require('@faker-js/faker');

// connecting node with db
const mysql = require('mysql2');

// generating random data
let getRandomUser = () => { // create: id, name, email, password
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// check if the data is generating properly
// console.log(getRandomUser())

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  database: 'delta',
  password: 'mysql@123'
});

// use connection methods to check or making chnages to DB
// Exception Handling: write  in try catch block, we never know what may go wrong
// we can write query else where and then pass it to our query connection method
let query = "INSERT INTO user (id, username, email, password) VALUES ?";
let user1 = ["123","123_new_user", "xyz@yahoo.com", "abc"];
let users = [
    ["123b","123_new_userb", "bxyz@yahoo.com", "abcb"],
    ["123c","123_new_userc", "cxyz@yahoo.com", "abcc"]
]
try {
    connection.query(query, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    })
} catch (err) {
    console.log(err);
}

// ending connection with DB after we get our result
connection.end()
