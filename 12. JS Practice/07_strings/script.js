// console.log("******** Strings ********")

// const hobbies = "making projects based on React, JavaScript and TypeScript, React"

// const firstindex = hobbies.indexOf("React")
// const lastindex = hobbies.lastIndexOf("React")

// console.log(firstindex, lastindex)

// hobbies.split()

// Practice
const guestList = "Our guests are: emma, jacob, isabella, ethan";

// 1. length of the text:
const length = guestList.length
console.log(`text length is: ${length}`)

// 2. text to uppercase
const uppercasedGuestList = guestList.toUpperCase()
console.log(uppercasedGuestList)

// 3. check if ETHAN in the uppercasedGuestList
const isEthanOnTheList = uppercasedGuestList.includes("ETHAN")
console.log(`is ETHAN on list: ${isEthanOnTheList}`)

// create a substring of onbly names from list
const listNames = uppercasedGuestList.split(",")
console.log(listNames)
