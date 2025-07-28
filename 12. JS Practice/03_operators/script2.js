/*
Comparison Operator: always return a Boolean Value of (true/false)
> < ==
*/

console.log("\n************** Comparison Operator *****************")

// greater than
console.log(`is a > b? ${a > b}`)

// greater than or equal to
console.log(`is a >= b? ${a >= b}`)

// less than
console.log(`is a < b? ${a < b}`)

// less than or equal to
console.log(`is a <= b? ${a <= b}`)

// is equal to
console.log(`is a == b? ${a == b}`)

// not equal to
console.log(`is a != b? ${a != b}`)

// strict equality
console.log(`is a === b? ${a === b}`)

// strict inequality
console.log(`is a !== b? ${a !== b}`)

console.log("\n########## Strict and Loose Equality ##########")

console.log(`5 == 5? ${5 == 5}`)
console.log(`Hello == Hello? ${"Hello" == "Hello"}`)

console.log(`\n5 === 5? ${5 === 5}`)
console.log(`Hello === Hello? ${"Hello" === "Hello"}`)

console.log(`\n5 == '5'? ${5 == '5'}`)
console.log(`5 === '5'? ${5 === '5'}`)

console.log("\n################ Tricky Que ################")
console.log(`\n'' == 0? ${'' == 0}`)
console.log(`0 == ''? ${0 == ''}`)
console.log(`0 == '0'? ${0 == '0'}`)
console.log(`false == 'false'? ${false == 'false'}`)
console.log(`false == '0'? ${false == '0'}`)
console.log(`\ntrue == 1? ${true == 1}`)
