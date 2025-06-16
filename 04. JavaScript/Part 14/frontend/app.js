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
