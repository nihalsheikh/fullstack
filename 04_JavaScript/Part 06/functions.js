console.log("Functions");
console.log("-----------------");

function greet() {
    console.log("Hello, World!")
}

greet();

console.log("-----------------");
console.log("----Dice----");

function rollDice() {
    let play = prompt("Roll the dice? Yes/No");

    switch(play) {
        case "Yes"||"yes" :
            let roll = Math.floor(Math.random() * 6) + 1;
            console.log(`You rolled: ${roll}`);
            break;
        case "No"||"no" :
            console.log("Goodbye!");
            break;
        default :
            console.log("Invalid input, Please try again!");
            break;
    }
}

console.log("Return Keyword");

function sum(a,b) {
    return a+b;
}

console.log(sum(sum(25,6), 32));

function randomInteger (min, max) {
    let num = Math.floor((Math.random) * (max - min + 1)) + min;
}
