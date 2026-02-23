// Object Basics -> Literals, Symbols, Methods, Freeze

// Creating a Symbol
const mySym = Symbol("value1");

// Object Literal
const myObj = {
    name: "Rolina",
    "full name": "Rolina Bharti",
    age: 29,
    email: "Roliza.google.com",
    phoneNumber: 9876543210,
    isLoggedIn: true,
    activeDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    [mySym]: "value1" // Using Symbol as key
};

// Accessing properties
console.log(myObj.name);           // Rolina
console.log(myObj["full name"]);   // Rolina Bharti
console.log(myObj.phoneNumber);    // 9876543210
console.log(myObj[mySym]);         // value1

// Modifying array property
myObj.activeDays = ["Tuesday", "Sunday"];
console.log(myObj.activeDays);     // ["Tuesday", "Sunday"]

// Freezing the object (prevents any changes)
Object.freeze(myObj);
// Trying to modify after freeze (won't work)
myObj.activeDays = ["Monday"];
console.log(myObj.activeDays);     // ["Tuesday", "Sunday"]

// Adding methods
myObj.namaste = function() {
    console.log("Namaste Duniya");
};

myObj.namasteTwice = function() {
    console.log(`Namaste Duniya, ${this.name}`);
};

// Calling methods
myObj.namaste();          // Namaste Duniya
myObj.namasteTwice();     // Namaste Duniya, Rolina