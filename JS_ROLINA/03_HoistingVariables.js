/* =========================
   Method 1 : Hoisting Demo
   ========================= */

console.log(x)
console.log(getName)

var x = 7
function getName() {
    console.log("Rolina")
}

/*
Output:
undefined
[Function: getName]

Explanation:
In JavaScript, before code execution, a memory creation phase happens.

- Variable declarations using `var` are hoisted and initialized with `undefined`.
- Function declarations are hoisted along with their complete function body.

So:
- `x` exists in memory but its value is `undefined`
- `getName` exists as a full function
*/


/* =========================
   Method 2 : Function Call
   ========================= */

console.log(x)
getName()

var x = 7
function getName() {
    console.log("Rolina")
}

/*
Output:
undefined
Rolina

Explanation:
During the memory creation phase:
- `x` is initialized as `undefined`
- `getName` is stored as a complete function

During the execution phase:
- `console.log(x)` prints `undefined`
- `getName()` successfully executes because the function was already available in memory
*/


/* =========================================
   Function Expression & Arrow Function
   ========================================= */

console.log(getName)
console.log(x)

var getName2 = function () {
    console.log("Rolina")
}

var getName = () => {
    console.log("Rolina")
}

/*
Output:
undefined
undefined

Explanation:
Here, `getName` and `getName2` are variables, not function declarations.

During the memory creation phase:
- `getName` → undefined
- `getName2` → undefined
- `x` → undefined

Arrow functions and function expressions are NOT hoisted like normal functions.
They behave like variables, so accessing them before assignment gives `undefined`.
*/
