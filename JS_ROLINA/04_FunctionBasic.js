// Example to understand how functions work in JavaScript
// (function call → execution → back to main code)

var x = 10;   // Main (global) code starts

printA()     // Function call
printB()     // Function call

console.log(x)   // Back to main code

function printA() {
    var x = 15
    console.log(x)   // Executes when printA() is called
}

function printB() {
    var x = 20
    console.log(x)   // Executes when printB() is called
}

/*
Output:
15
20
10

Explanation (simple flow):
1. JavaScript starts executing the main code line by line
2. When `printA()` is called, control goes inside printA function
3. printA runs its code and prints 15
4. After function execution, control comes back to main code
5. Same process happens with printB()
6. Finally, console.log(x) runs in main code and prints 10

Note:
- Function runs only when it is called
- After execution, function control returns to the main program
*/
