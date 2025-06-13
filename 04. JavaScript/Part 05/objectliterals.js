const student = {
    name: "John Doe",
    age: 20,
    marks: 95,
    city: "XYZ"
};

const post = {
    username: "@johndoe",
    content: "JS is fun",
    likes: 200,
    reposts: 20
};

//  key is stored as a string
const obj = {
    1: "a",
    2: "b",
    null: "c",
    true: "d",
    undefined: "e"
};

// Object of Objects
const objObj = {
    aman: {
        grade: "A",
        city: "Delhi"
    },
    om: {
        grade: "B",
        city: "Mumbai"
    },
    john: {
        grade: "A+",
        city: "Nagpur"
    }
};

// Array of Object
const arrObj = [
    {
        name: "john",
        age: 20,
        city: "Delhi"
    },
    {
        name: "jack",
        age: 18,
        city: "Pune"
    },
    {
        name: "joe",
        age: 21,
        city: "Mumbai"
    },
]

// Step-Wise: Random Integer Generation
let step1 = Math.random(); // range (0-1)

let step2 = step1 * 10; // Because we need num from range (0-10), 10 exclusive

let step3 = Math.floor(step2); // to get nearest small int value

let step4 = step3+1; // to get the final new range of 1-10
console.log(`Step-wise Generated: ${step4}`);

// Shorthand: Random Integer Generation
let randomNum = Math.floor(Math.random() * 10) + 1; // you can change to the number to range you want
console.log(`Shorthand Generated: ${randomNum}`);
