// ===============================
//  JavaScript Array Basics
// ===============================

// 1️⃣ Creating Arrays

// Method 1: Using array literal
const myArray = [0, 1, 2, 3, 4];
console.log("Array literal:", myArray);
console.log("Element at index 2:", myArray[2]);

// Method 2: Using Array constructor
const myArr = new Array(1, 2, 1, 2, 1, 1);
console.log("Constructor array:", myArr);
console.log("Type of myArr:", typeof myArr); // object


// ===============================
// Basic Array Methods
// ===============================

// ➤ push() – Add element at the end
myArr.push(5);
myArr.push(6);
console.log("After push:", myArr);

// ➤ unshift() – Add element at the beginning
myArr.unshift(12);
console.log("After unshift:", myArr);

// ➤ shift() – Remove first element
myArr.shift();
console.log("After shift:", myArr);

// ➤ includes() – Check if element exists
console.log("Includes 5?", myArr.includes(5));

// ➤ indexOf() – Find index of element
console.log("Index of 6:", myArr.indexOf(6));
console.log("Index of 64 (not found):", myArr.indexOf(64)); // -1


// ===============================
//  Convert Array to String
// ===============================

const stringArray = myArr.join(); // Converts to comma-separated string
console.log("Converted to string:", stringArray);
console.log("Type of stringArray:", typeof stringArray);
console.log("Type of myArr:", typeof myArr);


// ===============================
// Looping Through Array
// ===============================

const numbers = [0, 1, 2, 3, 4];

// Traditional for loop
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for...of loop
console.log("Using for...of loop:");
for (let value of numbers) {
    console.log(value);
}


// ===============================
// slice() vs splice()
// ===============================

const digits = [1, 4, 6, 9, 7, 8, 3, 5];

// ➤ slice(start, end)
// Returns a shallow copy without modifying original array
let sliced = digits.slice(1, 3);
console.log("Slice result:", sliced);
console.log("Original after slice:", digits);

// ➤ splice(start, deleteCount)
// Removes elements from original array
let spliced = digits.splice(1, 3);
console.log("Splice result:", spliced);
console.log("Original after splice:", digits);


// ===============================
// Spread Operator
// ===============================

let arr1 = [1, 23, 4];
let arr2 = [44, 66, 77];

// Combine arrays using spread operator
let combined = [...arr1, ...arr2];
console.log("Combined array:", combined);


//  Array of Objects

let users = [
    { name: "Rahul", age: 25 },
    { name: "Rahul", age: 25, profession: "SrEngineer" }
];

console.log("Second user's name:", users[1].name);
console.log("Second user's profession:", users[1].profession);