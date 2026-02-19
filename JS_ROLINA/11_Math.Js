// ===============================
// JavaScript Math Methods Demo
// ===============================

console.log("===== Basic Math Methods =====");

// Absolute value
console.log("Math.abs(-11):", Math.abs(-11));

// Rounding numbers
console.log("Math.round(4.44):", Math.round(4.44));
console.log("Math.round(4.8):", Math.round(4.8));

console.log("\n===== Floor & Ceil =====");

// Always rounds DOWN
console.log("Math.floor(4.99):", Math.floor(4.99));

// Always rounds UP
console.log("Math.ceil(2.11):", Math.ceil(2.11));

console.log("\n===== Min & Max =====");

// Smallest number
console.log("Math.min(2,3,1,6,66,11,1):", Math.min(2, 3, 1, 6, 66, 11, 1));

// Largest number
console.log("Math.max(11,55,22,34,64,88,96,0):", Math.max(11, 55, 22, 34, 64, 88, 96, 0));

console.log("\n===== Random Numbers =====");

// Random number between 0 (inclusive) and 1 (exclusive)
console.log("Math.random():", Math.random());

// Random number between 1 and 10
const random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random number (1-10):", random1to10);

// Random number between a custom range (10 to 20)
const min = 10;
const max = 20;

const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number (${min}-${max}):`, randomInRange);
