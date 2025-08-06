console.log("****** classes, new and this ******")

// this keyword
console.log("\n this")
const person = {
    name: "John",
    getName() {
        console.log(this)
    }
}

person.getName()

// class
console.log("\n Class")
class Person {
    constructor(name, age, isWorking) {
        this.name = name;
        this.age = age;
        this.isWorking = isWorking
    }
}

const user = new Person("John", 24, false)
console.log(user)


// Functional Approach to JS
console.log("\nFunctional Approach to class")
// const createPerson = (name, age, isWorking) => {
//     const userSchema = {
//         name: name,
//         age: age,
//         isWorking: isWorking
//     }
//     return userSchema
// }
// const createPerson = ( name, age, isWorking ) => {
//     const userSchema = { name, age, isWorking }
//     return userSchema
// }
// const createPerson = ( name, age, isWorking ) => {
//     return { name, age, isWorking }
// }
const createPerson = ( name, age, isWorking ) =>  ({ name, age, isWorking });

const user1 = createPerson("Joe", 24, true)
console.log(user1)
