console.log("Arrow Function for Square of a Number");

const square = n => n*n;

console.log("Print hello world");

let id = setInterval( () => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(id);
}, 10000);
