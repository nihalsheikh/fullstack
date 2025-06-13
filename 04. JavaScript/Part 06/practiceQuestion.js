// QUESTION 01
function retArr(arr) {
    let result = [];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] < arr[i]) {
            result.push(arr[i]);
        }
    }
}

// QUESTION 02
let str = "abcdabcdefgggh";

function unique(str) {
    let result = [];

    for(let i=0; i<str.length; i++) {
        if(!result.includes(str[i])) {
            result.push(str[i]);
        }
    }

    return result.join("");
}
