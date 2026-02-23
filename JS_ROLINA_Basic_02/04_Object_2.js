// ==============================
// Object Creation & Manipulation
// ==============================

// Singleton Object
const user = new Object();
console.log(user); // {}

// Literal Object
const amazonUser = {};
console.log(amazonUser); // {}

amazonUser.name = "Rolina";
amazonUser.id = "198RLAEBGK";
amazonUser.pass = "@@@@ZZZ###TTTT";

console.log(amazonUser);

// ==============================
// Nested Objects
// ==============================

const otherUser = {
    id: "234hhhh",
    myUserName: {
        fullname: {
            name: "Rolina",
            dept: "123fg",
            pass: "vvvvvvv"
        }
    }
};

console.log(otherUser.myUserName.fullname.dept);

// ==============================
// Combining Objects
// ==============================

const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };

//  Nested object (not merged)
const obj3 = { obj1, obj2 };
console.log(obj3);

//  Using Object.assign (mutates first object)
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// Using Spread Operator (recommended modern way)
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

// ==============================
// Array of Objects (Common in DB)
// ==============================

const usersFromDB = [
    { id: "qewq12", name: "Rolina" },
    { id: "qewaq12", name: "Roliana" },
    { id: "qewq13", name: "Roligna" },
    { id: "qewq14", name: "Rolhina" },
    { id: "qewq15", name: "Rolina" }
];

console.log(usersFromDB[2].name); // Roligna

// ==============================
// Object Utility Methods
// ==============================

const amazonUserTwo = {};

amazonUserTwo.name = "RolinaJi";
amazonUserTwo.id = "198RLAEBGKB";
amazonUserTwo.pass = "@@@@ZZZ###TTTT143";

console.log(Object.keys(amazonUserTwo));     // ['name', 'id', 'pass']
console.log(Object.values(amazonUserTwo));   // ['RolinaJi', ...]
console.log(Object.entries(amazonUserTwo));  // [['name','RolinaJi'], ...]

console.log(amazonUserTwo.hasOwnProperty("pass")); // true