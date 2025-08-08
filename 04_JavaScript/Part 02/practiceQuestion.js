console.log("Practice Question 02");
let size = "L";

if(size == "S") {
    console.log("Price is 50 Rs.");
} else if (size == "M") {
    console.log("Price is 100 Rs.");
} else if(size == "L") {
    console.log("Price is 200 Rs.");
} else {
    console.log("Price is 250 Rs.");
}

console.log("*************************************");
console.log("Practice Question 03");
console.log("Question 01");

let str = "good string";

if(str[0] === "a" && str.length>3) {
    console.log("Good String");
} else {
    console.log("Bad String");
}

console.log("Question 02");
let num = 12;

if(num%3 === 0 && (num+2 == 15 || num-1 == 11)) {
    console.log("safe")
} else {
    console.log("unsafe");
}

console.log("**************************************");
console.log("Practice Question 04");

let day = 7;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}
