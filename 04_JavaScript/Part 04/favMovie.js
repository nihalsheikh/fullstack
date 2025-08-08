let favMovie = "Tenet";

let guess = prompt("Guess the movie?");

while ((guess != favMovie) && (guess != "quit")) {
    console.log(`You guessed: ${guess}`);
    guess = prompt("Guess again?");
}

if( guess === favMovie) {
    alert("Correct Answer!!!");
    console.log(`You guessed correct, its : ${guess}`);
}
