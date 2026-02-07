// Topic: this & window in JavaScript (Browser)
// Simple example to understand global execution context

var a = 10;

/*
function sum() {
    var b = 20;   // Function scope variable
}
*/

console.log(a);        // 10
console.log(this.a);   // 10
console.log(window.a); // 10

/*
Why output is same?

- In browser, global execution context creates:
  - Global object → window
  - `this` → points to window
- `var` variables in global scope become properties of window

So:
a === this.a === window.a
*/

console.log(b);
// Error: b is not defined
// because `b` is declared inside a function and not available globally
