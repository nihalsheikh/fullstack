// 01 Question: Multiple of 10
let nums = [10,20,50,90,40,100];

let mulTen = nums.every( (el) => el % 10 == 0);
console.log(mulTen);

// 02 Question: find Min Number
let arr = [1,2,5,6,8,7,50,20,95,70,83,64,4,5,6,13,22,44,66];

function getMin(arr) {
    let minNum = arr.reduce( (min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    });

    return minNum;
}
