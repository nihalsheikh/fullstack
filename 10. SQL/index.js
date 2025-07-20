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
try {
    connection.query("SHOW TABLES", (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}
