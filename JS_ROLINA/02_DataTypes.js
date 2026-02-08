"use strict"; // Treat all JS code as newer version

// alert(3 + 3); // Works in browser, not in Node.js

let age = 19;
let name = "rolina";
let isLoggedIn = true;

let val = undefined;

// Data Types in JavaScript
//Primitive data types

// number   -> 2 to the power 53
// bigint
// string  -> ""
// boolean -> true / false
// null    -> standalone value (typeof null is object) //Null
// undefined -> value is not assigned  //Undefined
// symbol  -> used for uniqueness - Datatype - symbol

console.log(typeof isLoggedIn); // boolean
console.log("hello");

//Non - Primitive 
//Arrays
//Functions
//Object

// For non primitive type of datatype is object

let hero = ["A","b","c"]

let myObj = {
     name:"Rolina",
     age: 27
}

 function myfunc()
{
    console.log("Hello")
}

console.log(typeof hero)
console.log(typeof myObj)
console.log(typeof myfunc)


