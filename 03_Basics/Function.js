// Function

function myName() {
    console.log("Hello ji");
}

myName(); // Hello ji
console.log(myName); // [Function: myName]

// Second Example

function addTwoNumber(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumber();           // NaN
addTwoNumber(4, 5);       // 9
addTwoNumber(4, "5");     // 45 (string concat)
addTwoNumber(3, null);    // 3

const res = addTwoNumber(4, 5);
console.log(res); // undefined (no return)

// With return

function addTwoNumberReturn(num1, num2) {
    let result = num1 + num2;
    return result;
}

const result = addTwoNumberReturn(4, 6);
console.log(result); // 10

// User login

function userLogged(username) {
    return `${username} has logged in`;
}

console.log(userLogged("Rolina")); 
console.log(userLogged(""));       
console.log(userLogged());         

// With check

function userChecked(username) {
    if (!username) {
        console.log("Enter username");
        return;
    }
    return `${username} has logged in`;
}

console.log(userChecked());

// Default value

function userNewLogged(username = "LiRo") {
    return `${username} has logged in`;
}

console.log(userNewLogged());