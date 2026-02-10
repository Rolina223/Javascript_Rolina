// String Prototype - Part 3
// Searching, matching and comparison methods

let msg = "JavaScript is powerful. JavaScript is fun.";

console.log(msg.match("JavaScript"));
// Output: ["JavaScript", index: 0, ...]
// Explanation: first matching value return karta hai

console.log([...msg.matchAll("JavaScript")]);
// Output: Array of all matches
// Explanation: saare matches deta hai (iterator form me)

console.log(msg.search("powerful"));
// Output: 14
// Explanation: word ka index deta hai (regex based search)

console.log(msg.includes("fun"));
// Output: true
// Explanation: check karta hai word present hai ya nahi

console.log(msg.startsWith("JavaScript"));
// Output: true
// Explanation: string kis word se start ho rahi hai

console.log(msg.endsWith("."));
// Output: true
// Explanation: string kis character pe end ho rahi hai

console.log(msg.localeCompare("JavaScript"));
// Output: 1 / -1 / 0
// Explanation: strings compare karta hai
// 0 means equal, -1 means smaller, 1 means greater

console.log(msg.normalize());
// Output: "JavaScript is powerful. JavaScript is fun."
// Explanation: unicode characters ko normalize karta hai

console.log(msg.toString());
// Output: "JavaScript is powerful. JavaScript is fun."
// Explanation: value ko string me convert karta hai

console.log(String.fromCharCode(72, 73));
// Output: "HI"
// Explanation: ASCII/Unicode values ko string me convert karta hai

console.log("ABC".charAt(0));
// Output: "A"
// Explanation: first character return karta hai

console.log("ABC".at(1));
// Output: "B"
// Explanation: index based access (modern way)
