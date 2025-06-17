// OOPS with JavaScript
// Prototype: built-in property in every object
// ex: Arrays in JS are internally considered as Objects
let arr = [1,2,3,4]
console.log(arr);

// you can see the output in browser console as >(4)[1,2,3,4]
// and when you expand it you can see something like the following:
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// [[Prototype]]: Array(0)
// All the functions that are applied to array are basically stored in Prototype, and Array inherits them

// lets make a func for only arr
// This func is unique to arr, if we create another arr2,
// it will not have this func as it is not the part of prototype
arr.sayHello = () => console.log("This is arr");

// Accessing Prototypes
// through the following line of code we can access the copy of the Prototype object: _ _ proto _ _
console.log(arr.__proto__);

// Access actual prototype object
// syntax: datatype.prototype
Array.prototype
String.prototype

// Factory Function

function makeIdentity(name, age, n, c) {
    // let country = [IND, USA, CAN, JAP, UK, AUS, UAE, QAT, SAU]
    // const skin = [white, yellow, brown, black]

    const person = {
        name: name,
        age: age,
        // nationality: this.country[n],
        // skinColor: this.skin[c],
        talk() {
            console.log(`Hi, my name is ${this.name}`)
        }
    }

    return person
}

let p1 = makeIdentity("John", 25);
let p2 = makeIdentity("Joe", 30)

// New Operator: new keyword
// Constructor Func: special func in JS, does not return anything
// function Person(name, age) {
//     this.name = name; // directly accessing the object
//     this.age = age; // directly accessing the object
//     console.log(this) // when the instnace is not created, `this` here will refer to Window itself
//     // when the instance is created, `this` here will refer to the Constructor function's new instance
// }

// now we can make functions inside Constructor Func without memory issues
// Person.prototype.talk = () => {
//     console.log(`Hi, my name is ${this.name}`)
// }

// using 'new' keyword to use the Constructor Func
// let p3 = new Person("Tony", 25)

// Class & Constructor
class newPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`)
    }
}

let p4 = new newPerson()

// INHERITANCE: mechanism that allows to create new classes on the basis of already existing classes
// ex:
// class Student {
//     constructor(name, age, rollNum) {
//         this.name = name; // same code  in Teacher class
//         this.age = age; // same code in Teacher class
//         this.rollNum = rollNum;
//     }

//     intro() { // repeated code in Teacher class
//         console.log(`Hello, I'm ${this.name}`);
//         console.log("Nice to meet you");
//     }
// }

// class Teacher {
//     constructor(name, age, subject) {
//         this.name = name; // same code in Student class
//         this.age = age; // same code in Student class
//         this.subject = subject;
//     }

//     intro() { // repeated code in Student class
//         console.log(`Hello, I'm ${this.name}`);
//         console.log("Nice to meet you");
//     }
// }

// so many lines of code were repeated in the above example,
// to get rid of these situations we use the conspt of inheritance
// in Inheritance we use two keywords: 'extends' and 'super'
class Person { // Parent or base class
    // all the repeated code is put in another class nad then we will inherit it into required places
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        console.log(`Hello, I'm ${this.name}`);
        console.log("Nice to meet you");
    }
}

// extends is used to inhert properties and func from parent or base class to child class
class Student extends Person { // child class
    constructor(name, age, marks) {
        super(name, age); // we use 'super' keyword to call the Parent class constructor
        this.marks = marks;
    }
}

class Teacher extends Person { // child class
    constructor(name, age, subject) {
        super(name, age); // we use 'super' keyword to call the Parent class constructor
        this.subject = subject;
    }
}

// create new instance
let stu1 = new Student("John", 16, 99); // initialzed empty object with some values in it
let tec1 = new Teacher("Eve", 30, "maths"); // initialzed empty object with some values in it
