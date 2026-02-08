// Topic: Primitive vs Non-Primitive (Stack vs Heap)
// Simple example while learning JavaScript

// Primitive data types → stored in Stack (copy of value)

let numOne = 23;
let numTwo = numOne;

numTwo = 25;

console.log(numOne); // 23
console.log(numTwo); // 25

/*
Explanation:
- Primitive values are stored in stack
- When assigned to another variable, a copy is passed
- Changing numTwo does NOT affect numOne
*/


// Non-Primitive data types → stored in Heap (reference of value)

let objOne = {
    email: "www.rolina@1432.com",
    age: 28
};

let objTwo = objOne;
objTwo.age = 25;

console.log(objTwo.age); // 25
console.log(objOne.age); // 25

/*
Explanation:
- Objects are stored in heap
- Variables hold reference to the same object
- Changing value using one reference affects the original object
*/
