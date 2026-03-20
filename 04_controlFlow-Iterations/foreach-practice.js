// Array of sports
const myArr = ["cri", "Foot", "Rug", "Hock"]

// -----------------------------
// 1️⃣ forEach with normal function
// forEach is a Higher Order Function
// It takes a callback function and runs it for each element
// -----------------------------
myArr.forEach(function (item) {
  // console.log(item);
})


// -----------------------------
// 2️⃣ forEach with Arrow Function
// Modern ES6 syntax
// -----------------------------
/*
myArr.forEach((value) => {
    // console.log(value);
})
*/


// -----------------------------
// 3️⃣ Normal function and 'this'
// In normal function 'this' refers to global object (in browser -> window)
// -----------------------------
/*
function chai(){
    const uname = "Abasbs"
    console.log(this);
}
chai()
*/


// -----------------------------
// 4️⃣ Arrow function and 'this'
// Arrow function does NOT have its own 'this'
// It takes 'this' from its surrounding scope
// -----------------------------
/*
const funct = () => {
    let uname = "Abasbs"
    console.log(this);
}
*/


// -----------------------------
// 5️⃣ Passing external function as callback
// printing() is callback
// forEach() is Higher Order Function
// -----------------------------
function printing(items) {
    // console.log(items);   
}

myArr.forEach(printing)


// -----------------------------
// 6️⃣ forEach parameters
// item  -> current element
// index -> position in array
// array -> original array
// -----------------------------
myArr.forEach((item, index, array) => {
    // console.log(item, index, array);       
})

// Example Output
// cri 0 [ 'cri', 'Foot', 'Rug', 'Hock' ]
// Foot 1 [ 'cri', 'Foot', 'Rug', 'Hock' ]
// Rug 2 [ 'cri', 'Foot', 'Rug', 'Hock' ]
// Hock 3 [ 'cri', 'Foot', 'Rug', 'Hock' ]


// -----------------------------
// 7️⃣ Array of Objects
// Commonly used in real applications (API data, database data)
// -----------------------------
const newArr = [

{
    name: "OneCode",
    language: "Java"
},

{
    name: "TwoCode",
    language: "Python"
},

{
    name: "ThreeCode",
    language: "Ruby"
}

]

// -----------------------------
// 8️⃣ Accessing object values using forEach
// -----------------------------
newArr.forEach((item) => {
    console.log(item.name)
    console.log(item.language)
})