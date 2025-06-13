// console.log("method.exports");

// writing some math functions
const sum = (a, b) => a + b;

const mul = (a, b) => a * b;

const div = (a, b) => a / b;

const exp = (a, b) => a ** b;

const randomNumber = () => {
    Math.floor(Math.random() * 10) + 1;
}

const g = 9.8;

const PI = 3.14;

// method 1 of exporting: make and obj and pass it to module.exports
let obj = {
    sum: sum,
    mul: mul,
    div: div,
    exp: exp,
    randomNumber: randomNumber,
    g: g,
    PI: PI,
}

module.exports = obj;

// Method 2 of exporting: writing function inside the module.exports obj
// module.exports = {
//     sum: sum,
//     mul: mul,
//     div: div,
//     exp: exp,
//     randomNumber: randomNumber,
//     g: g,
//     PI: PI,
// }


//Method 3 od exporting: directly writing module.exports with method
// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;

// Shortcut for Method 3: writing only exports *WITH* the method
// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
