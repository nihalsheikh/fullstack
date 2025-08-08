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

// 4. create a substring of only names from list
const substringGuests = uppercasedGuestList.slice(16)
console.log(substringGuests)

// make an array of guest names
const guests = substringGuests.split(",")
console.log(guests)
