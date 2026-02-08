// String Prototype - Part 2
// Cut, replace and conversion related methods

let text = "JavaScript is awesome";

console.log(text.slice(0, 10));
// Output: "JavaScript"
// Explanation: slice string ka part nikalta hai
// start index se end index tak (end included nahi hota)

console.log(text.substring(0, 10));
// Output: "JavaScript"
// Explanation: substring bhi slice jaisa hai
// bas negative index support nahi karta

console.log(text.split(" "));
// Output: ["JavaScript", "is", "awesome"]
// Explanation: string ko array me convert karta hai
// separator ke basis pe

console.log(text.replace("awesome", "powerful"));
// Output: "JavaScript is powerful"
// Explanation: pehla matching word replace karta hai

console.log("ha ha ha".replaceAll("ha", "ho"));
// Output: "ho ho ho"
// Explanation: saare matching words replace karta hai

console.log(text.repeat(2));
// Output: "JavaScript is awesomeJavaScript is awesome"
// Explanation: string ko given number of times repeat karta hai

console.log("5".padStart(4, "0"));
// Output: "0005"
// Explanation: start me padding add karta hai
// mostly numbers formatting ke liye use hota hai

console.log("5".padEnd(4, "0"));
// Output: "5000"
// Explanation: end me padding add karta hai

console.log(text.charAt(1));
// Output: "a"
// Explanation: given index ka character return karta hai

console.log(text.charCodeAt(1));
// Output: 97
// Explanation: character ka Unicode/ASCII value deta hai

console.log(text.at(-1));
// Output: "e"
// Explanation: negative index se last characters access kar sakte hain

console.log(text.valueOf());
// Output: "JavaScript is awesome"
// Explanation: primitive string value return karta hai
