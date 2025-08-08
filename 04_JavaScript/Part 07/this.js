// creating an object
const student = {
    name: "John Doe",
    age: 25,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
};

// try & catch
try {
    console.log(a);
} catch {
    console.log("Variable a doesn't exist");
}

// Arrow Function
const sum = (a, b) => {
    console.log(a+b);
};

// Implicit Arrow Function
const mul = (a,b) => (
    a*b
);

// this with arrow function
const player = {
    name: "John",
    marks: 99,
    // Normal Function
    getName: function() { // window -> player -> getName()
        console.log(this); // scope of "this" is the object, i.e. this = player
        return this.name;
    },
    // Arrow Function
    getMarks: () => { // window -> player -> getMarks()
        console.log(this); // scope of "this" is "this" of parent, i.e. this = window
        return this.marks;
    }
};
