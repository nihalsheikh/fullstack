// btn.onclick = () => { // or function() {alert("btn was clicked");}
//     alert("btn was clicked");
// }

let btns = document.querySelectorAll("button");

// Another way
function greet() {
    alert("Hello!");
}


// for multiple buttons
for(btn of btns) {
    btn.onclick = greet;
}
