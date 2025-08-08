console.log("Array Methods");

// 01 forEach
console.log("01 forEach:")
let arr = [1,2,3,4,5];

arr.forEach((el) => {
    console.log(el);
});

// 02 Map
console.log("02 Map");

let num = [1,2,3,4];

let double = num.map( (el) => {
    return el * 2;
});

console.log(double);

// 03 Filter
console.log("03 Filter");

let nums = [1,2,3,5,6,8,7,9,11,13,21,28,29];
let even = nums.filter( (el) => {
    return el % 2 == 0;
});

console.log(even);

// 04 Every
console.log("04 Every");

console.log([2,4,6,8].every( (el) => el % 2 == 0));
console.log([3,4,5,6,8].every( (el) => el % 2 == 0));

// 05 Some
console.log("05 Some");

console.log([2,3,5,8].some( (el) => el % 2 != 0));
console.log([2,4,6,8].some( (el) => el % 2 != 0));

// 06 Reduce
console.log("06 Reduce");

console.log([2,4,6,8,10].reduce( (acc, el) => acc + el));
