
// JavaScript Date Object Practice
// Revision Friendly Version 
// Current Date & Time
let currentDate = new Date();

// pura date object deta hai
console.log("Current Date Object:", currentDate);
// Output (example):
// Current Date Object: Tue Feb 18 2026 12:30:45 GMT+0530

console.log("toString():", currentDate.toString());
// readable format me full date + time

console.log("toDateString():", currentDate.toDateString());
// sirf date part deta hai
// Example: Tue Feb 18 2026

console.log("toLocaleString():", currentDate.toLocaleString());
// local format me date + time
// Example: 18/2/2026, 12:30:45 pm

console.log("Type of Date:", typeof currentDate);
// Output: object


// ------------------------------------------
// Custom Date Create Karna
// ------------------------------------------

// Note: Month 0 se start hota hai
// 0 = Jan, 1 = Feb, 2 = March ...

let customDate = new Date(2026, 1, 20); 
// iska matlab: 20 February 2026

console.log("\nCustom Date:", customDate.toDateString());
// Output: Fri Feb 20 2026

console.log("Full Year:", customDate.getFullYear());
// Output: 2026

console.log("Hours:", customDate.getHours());
// Output: 0 (kyunki time pass nahi kiya)


// ------------------------------------------
// Date With Time
// ------------------------------------------

let dateWithTime = new Date(2026, 1, 20, 5, 2);
// 20 Feb 2026, 5:02 AM

console.log("\nDate With Time:", dateWithTime.toLocaleString());
// Example Output: 20/2/2026, 5:02:00 am


// ------------------------------------------
// Timestamp Concept
// ------------------------------------------

// getTime() → milliseconds since 1 Jan 1970
console.log("\nTimestamp (ms):", customDate.getTime());

// seconds me convert karne ke liye
console.log("Timestamp (sec):", Math.floor(customDate.getTime() / 1000));


// ------------------------------------------
// Current Time se Values Nikalna
// ------------------------------------------

let now = new Date();

console.log("\nHours:", now.getHours());
// current hour dega (0–23)

console.log("Day (0=Sunday):", now.getDay());
// 0 = Sunday, 1 = Monday ...

console.log("Minutes:", now.getMinutes());

console.log("Timezone Offset:", now.getTimezoneOffset());
// UTC se kitna difference hai (minutes me)


// ------------------------------------------
// Custom Formatting
// ------------------------------------------

console.log(
  "\nFormatted Date:",
  now.toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  })
);

// Example Output:
// Tuesday, 18 February 2026, 12:30 pm