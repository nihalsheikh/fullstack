console.log("******* Tricky Concepts in JS *******")

// Global Scope
console.log("\n######## Global Scope #########")
const fname = "John";

const logName = () => {
    console.log(fname);
}

logName();

// Local Scope or Function Scope
console.log("\n######## Function Scope #########")
const someFunc = () => {
    // This is the local scope, whcih is inside "{}"
    const age = 20;

    console.log(age);
}
// console.log(age) // cannot access the age variable outside the func/local scope
someFunc();
