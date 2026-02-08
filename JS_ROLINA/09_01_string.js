// String Prototype - Part 1
// Basic string methods (learning notes)

let str = "  Hello JavaScript  ";

//String interpolation
console.log(`The avove string value is ${str}`)

console.log(str.length);
// Output: 20
// Explanation: length property total characters count karta hai
// spaces bhi count hote hain

console.log(str.toUpperCase());
// Output: "  HELLO JAVASCRIPT  "
// Explanation: string ko uppercase me convert karta hai

console.log(str.toLowerCase());
// Output: "  hello javascript  "
// Explanation: string ko lowercase me convert karta hai

console.log(str.trim());
// Output: "Hello JavaScript"
// Explanation: start aur end ke extra spaces remove karta hai

console.log(str.trimStart());
// Output: "Hello JavaScript  "
// Explanation: sirf starting ke spaces remove hote hain

console.log(str.trimEnd());
// Output: "  Hello JavaScript"
// Explanation: sirf ending ke spaces remove hote hain

console.log(str.includes("Java"));
// Output: true
// Explanation: check karta hai given word string ke andar hai ya nahi

console.log(str.indexOf("Java"));
// Output: 8
// Explanation: word ka starting index deta hai
// agar word na mile to -1 return hota hai

console.log(str.lastIndexOf("a"));
// Output: 16
// Explanation: character last time kis index pe mila

console.log(str.startsWith("  He"));
// Output: true
// Explanation: check karta hai string kis value se start ho rahi hai

console.log(str.endsWith("  "));
// Output: true
// Explanation: check karta hai string kis value pe end ho rahi hai

console.log(str.concat("!!!"));
// Output: "  Hello JavaScript  !!!"
// Explanation: existing string ke sath new string add karta hai
