let request = "even"; // odd/even

function oddEven(request) { // Factory Function
    if(request == "odd") {
        return function(n) {
            console.log((!(n%2 == 0)));
        }
    } else if(request == "even") {
        return function(n) { 
            console.log(n%2 == 0);
        }
    } else {
        console.log("Invalid request");
    }
}

let func = oddEven(request);
