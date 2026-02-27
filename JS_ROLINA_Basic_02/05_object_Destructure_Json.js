// basic object example

const shop = {
    toy: "Car",
    mobilePhone: "Samsung",
    television: "LG, Samsung",
    fridge: "LG"
};

// accessing property
console.log(shop.television);


// object destructuring
// syntax: const { propertyName: newVariableName } = object

const { mobilePhone: Mob } = shop;
console.log(Mob);


// JSON format example (only structure)

const jsonData = {
    "name": "Rolina",
    "place": "Uttara",
    "game": "MWA"
};

console.log(jsonData);


// array of objects (common API response structure)

const users = [
    { name: "Rohit", age: 25 },
    { name: "Aman", age: 22 },
    { name: "Priya", age: 24 }
];

console.log(users[1].name);