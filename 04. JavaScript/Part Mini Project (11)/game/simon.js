let gameCard = []; // array to store game sequence
let userCard = []; // array to store users clicks sequence
let highScore = []; // store all game pts here

let cards = ["pink", "orange", "blue", "violet"]; // color of cards

let level = document.querySelector("#lvl");
let lvl = 0; // new game level
level.innerText = `Level: ${lvl}`;

let points = document.querySelector("#pts")
let pts = 0;
points.innerText = `Points: ${pts}`;

let started = false; // is game started???
function startGame() {
    if(started == false) {
        console.log("Game Started");
        started = true;
        level.style.backgroundColor = "white";
        lvl = 0;
        pts = 0;

        newLevel();
    }
}
let start = document.querySelector("#start")
start.addEventListener("click", startGame);

function quitGame() {
    if(started == true) {
        console.log("Game Stopped!");
        points.innerText = `Your Final Score is: ${lvl}`;

        level.innerText = `Level: ${lvl}`;

        gameCard = []; // emptying gameCard array when quitting
        userCard = []; // emptying userCard array when quitting

        // document.reset;
        started = false;
    }
}
let quit = document.querySelector("#quit");
quit.addEventListener("click", quitGame);

function gameCardFlash(card) { // game makes card color white
    card.classList.add("flash");

    // after flashing remove that class
    setTimeout(function() { // (function and timeout in ms)
        card.classList.remove("flash");
    }, 600);
}

function userCardFlash(card) { // user makes card color green
    card.classList.add("userCardFlash");

    // after flashing remove that class
    setTimeout(function() { // (function and timeout in ms)
        card.classList.remove("userCardFlash");
    }, 500);
}

// new level and flash cards
function newLevel() {
    userCard = []; // after every new level userCard clicks resets
    lvl++;
    level.innerText = `Level: ${lvl}`;
    points.innerText = `Points: ${pts}`;

    // a card/cards should flash
    let cardIndex= Math.floor(Math.random() * 4);
    let cardColor = cards[cardIndex]; // saving randomy generated index color
    let randomCard = document.querySelector(`.${cardColor}`);

    gameCard.push(cardColor);
    gameCardFlash(randomCard);
    console.log(gameCard);
}

// match the cards
function cardCheck(index) { //arg is last index of userCard
    // let index = lvl - 1;

    if (userCard[index] === gameCard[index]) {
        // console.log("same value");
        if(userCard.length == gameCard.length) {
            setTimeout(newLevel, 240);
            pts++;
        }
    } else {
        quitGame();
        points.innerText = `Your Final Score is: ${lvl}`;
        level.innerText = "Game Over! start again";
        level.style.backgroundColor = "red";
    }
}

// Clicking on cards
function cardClicked() {
    if(started == true) {
        let card = this;
        userCardFlash(card); // user clickng card

        userColor = card.getAttribute("id");
        userCard.push(userColor);

        // check ans with cardCheck
        cardCheck(userCard.length-1);
    }
}

let allCards = document.querySelectorAll(".card");
for(card of allCards) {
    card.addEventListener("click", cardClicked);
}

// write function to reset everything on quit game or losing
