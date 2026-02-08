// Topic: Comparison & Equality in JavaScript
// Basic examples while learning JS

// Normal comparisons
// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 != 1)

// String vs Number comparison
// console.log("2" > 1)   // true → string "2" is converted to number
// console.log("2" > 5)   // false

// null comparisons (confusing part)
// console.log(null > 0)    // false
// console.log(null < 0)    // false
// console.log(null >= 0)   // true
// console.log(null == 0)   // false
// console.log(null != 0)   // true

// undefined comparisons
console.log(undefined > 0)    // false
console.log(undefined < 0)    // false
console.log(undefined >= 0)   // false
console.log(undefined <= 0)   // false
console.log(undefined != 0)   // true
console.log(undefined == 0)   // false

/*
Important note:
- Comparisons (<, >, <=, >=) and equality (==) work differently
- null behaves differently in comparison and equality checks
- undefined always gives false in numeric comparisons
*/

// Strict equality (===)
// No type conversion, value + datatype both are checked
console.log("2" === 2)   // false
console.log(2 === 2)     // true
