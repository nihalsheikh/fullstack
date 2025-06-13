// Calulator Function
function calc(a, b) {
    let op = prompt("Enter operator (+, -, *, /): ");
    switch (op) {
        case "+" :
            return a+b;
            break;
        case "-" :
            return a-b;
            break;
        case "*" :
            return a*b;
            break;
        case "/" :
            return a/b;
            break;
        case "%" :
            return a%b;
            break;
        default :
            console.log("Invalid Request");
            break;
    }
}
