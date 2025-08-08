let n = prompt("Enter n for table");
n = parseInt(n);

console.log("Single Loop");
for(let i=n; i<=n*5; i+=n) {
    console.log(i);
}

console.log("Nested Loop");
for(let i=1; i<=3; i++) {
    console.log(`outer loop: ${i}`);
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
}

console.log("While Loop");
let i = 1;
while(i<=5) {
    console.log(i);
    i++;
}
