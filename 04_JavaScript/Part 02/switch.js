console.log("Switch Statement");

let light = "green";

switch(light) {
    case "red" :
        console.log("Stop");
        break;
    case "yellow" :
        console.log("Go slow");
        break;
    case "green" :
        console.log("Go");
        break;
    default :
        console.log("Trafic Signal not working");
}

console.log("***********************************")
console.log("Alert displayed on the browser");

alert("Alert Example usage");
console.log("This is a console.log text");
console.error("This is a console.error text");
console.warn("This is a console.warn text");

console.log("***********************************")
console.log("Prompt displayed on the browser");

let name = prompt("Enter your name");
console.log(name);
