// Node with SQL

// creating random data from faker
const { faker } = require('@faker-js/faker');

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
console.log(getRandomUser())
