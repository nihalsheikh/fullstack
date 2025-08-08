console.log("Arithmetic Operators");
console.log("***************************");

let a = 20;
let b = 3;

console.log(a+b); // Addition
console.group(a-b); //Subtraction
console.log(a*b); //Multiplication
console.log(a/b); //Division;
console.log(a%b); //Modulo
console.log(a**b); //Exponentiation
console.log("***************************");

console.log("Unary Operators");
console.log("***************************");
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

console.log("***************************");
console.log("Assignment Operators");
console.log("***************************");
let age = 19;
console.log(age+=5);
console.log(age-=1);
console.log(age*=2);
console.log(age/=3);
console.log(age%=6);
console.log("***************************");

console.log("Comparison Operators");
console.log("***************************");
let newAge = 16;
console.log(newAge>16);
console.log(newAge>=16);
console.log(newAge<16);
console.log(newAge<=16);
console.log(newAge==16);
console.log(newAge!=16);
console.log("***************************");

console.log("else if Operators");
console.log("***************************");
if(newAge > 18) {
    console.log("You can vote");
} else if (newAge < 18) {
    console.log("You cannot vote");
}

console.log("***************************");
console.log("else if Operators");
console.log("***************************");
if(newAge > 18) {
    console.log("You can vote");
} else if (newAge > 16) {
    console.log("You cannot vote");
} else {
    console.log("You are not old enough");
}
