
// Combining Arrays

const cricketInd = ["Sachin", "Rahul", "Dhoni"];
const cricketAus = ["Hayden", "Gilchrist", "Ponting"];

//  push() – Adds entire array as a single element (nested array example)
// cricketInd.push(cricketAus);
// console.log(cricketInd);
// Output: ['Sachin','Rahul','Dhoni',['Hayden','Gilchrist','Ponting']]
// console.log(cricketInd[3][2]); // Accessing nested value -> Ponting


//  concat() – Combines arrays into a new array
const cricketNew = cricketAus.concat(cricketInd);
console.log("Using concat():", cricketNew);
// Output: ['Hayden','Gilchrist','Ponting','Sachin','Rahul','Dhoni']


//Spread Operator (...) – Modern & clean way to merge arrays
const supCricket = [...cricketAus, ...cricketInd, ...cricketAus];
console.log("Using spread operator:", supCricket);



//  Flattening Nested Arrays


const arr = [1, 2, 3, [3, 4, 5, 6], [7, 8, 9, 10]];

//  flat(depth)
// Infinity ensures complete flattening
const newArr = arr.flat(Infinity);
console.log("Flattened array:", newArr);



// Array Utility Methods


//  Array.isArray() – Checks if value is array
console.log("Is 'HelllloW' an array?", Array.isArray("HelllloW"));


//  Array.from() – Converts iterable/string into array
console.log("Array from string:", Array.from("HellloW"));

//  Important: Array.from() with object
// If object is not iterable, it returns empty array
console.log("Array from object:", Array.from({ name: "hello" }));
// Output: [] (because object is not iterable)



// Array.of()

let marks1 = 100;
let marks2 = 100;
let marks3 = 100;
let marks4 = 100;

//  Array.of() – Creates array from given values
console.log("Array.of example:", Array.of(marks1, marks2, marks3, marks4));

