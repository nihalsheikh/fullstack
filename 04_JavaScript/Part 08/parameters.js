// Default Parameters
console.log("Default Parameters");

function sum(a, b = 2) {
    return a + b;
}

// Spread
console.log("Spread");

let sprArr = [11,2,23,56,8,45,5];

let minFunc = Math.min(...sprArr);
console.log(minFunc);
