let jsonData = '{"fname":"john", "lname":"doe", "fact":"Lorem ipsum dolor, sit amet consectetur adipisicing."}';

let jsonParse = JSON.parse(jsonData);
console.log("This is parsed JSON data: ",jsonParse);
console.log(jsonParse.fname);
console.log(jsonParse.lname);
console.log(jsonParse.fact);

let newJSON = {
    fname: 'john',
    lname: 'doe',
    fact: 'Lorem ipsum dolor, sit amet consectetur adipisicing.'
}

let jsonString = JSON.stringify(newJSON);
console.log("This is stringified JSON data: ",jsonString);

// FETCH JSON API Data
let url = "https://catfact.ninja/fact";
fetch(url);
