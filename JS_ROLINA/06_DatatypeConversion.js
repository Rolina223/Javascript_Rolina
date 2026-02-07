// Topic: Type Conversion in JavaScript
// Simple examples while learning JS

let score = "33";

console.log(typeof score);        // string
console.log(typeof(score));       // string

// String → Number
let scoreInNumber = Number(score);
console.log(typeof scoreInNumber); // number

// Invalid number string
let anotherScore = "33abc";
let scoreInAnotherNumber = Number(anotherScore);
console.log(typeof scoreInAnotherNumber); // number
console.log(scoreInAnotherNumber);        // NaN (Not a Number)

// null → Number
let thirdScoreValue = null;
let thirdScoreConvertValue = Number(thirdScoreValue);
console.log(typeof thirdScoreConvertValue); // number
console.log(thirdScoreConvertValue);        // 0

// undefined → Number
let value = undefined;
let convertValue = Number(value);
console.log(typeof convertValue); // number
console.log(convertValue);        // NaN

// Number → Boolean
let isValue = 1;
let checkValue = Boolean(isValue);
console.log(typeof checkValue); // boolean
console.log(checkValue);        // true (For value 0 → false)

// Empty string → Boolean
let isFirstValue = "";
let checkFirstValue = Boolean(isFirstValue);
console.log(typeof checkFirstValue); // boolean
console.log(checkFirstValue);        // false (if vale is  given "abc" → true)

// Number → String
let num = 23;
let convertIntoString = String(num);
console.log(convertIntoString);       // "23"
console.log(typeof convertIntoString); // string
