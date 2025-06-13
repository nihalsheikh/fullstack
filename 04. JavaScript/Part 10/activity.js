let newHead = document.querySelector("h2");
let btn = document.querySelector("button");
let div = document.querySelector("div");

const rgb = function() {
    // generate random color code
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const h2 = function() {
    // assign rgb color code to h2
    newHead.innerText = rgb();
}

const divBack = function() {
    // assign rgb color code to div background
    div.style.backgroundColor = rgb();
}

btn.addEventListener("click", h2)

btn.addEventListener("click", divBack);

// ======================= Reset =============================
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function() {
    location.reload();
});
// =============================***===========================

// ======================== Copy =============================
let copy = document.getElementById("copy");

copy.addEventListener("click", function() {
    const colorToCopy = newHead.innerText; // Get the current RGB text from the h2

    // very important line to copy a text
    navigator.clipboard.writeText(colorToCopy)
})
// ============================***============================
