console.log("Practice Question 01");
console.log("****Q1****");
let msg = "help!";
let newMsg = msg.trim().toUpperCase();
console.log(msg);
console.log(newMsg);
console.log("****Q2****");
let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
console.log("****Q3****");
console.log(name.slice(4).replace("l", "t").replace("l", "t"));
console.log("******************************");
console.log("Practice Question 02");
console.log("****Q1****");

let start = ["january", "july", "march", "august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
let end = start;

console.log("******************************");
console.log("Practice Question 03");
console.log("****Q1****");
let months = ["january", "july", "march", "august"];
let finalMonths = months.splice(0, 2, "july", "june");
console.log(months);

let langs = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(langs);
console.log(langs.reverse().indexOf("javascript"));
