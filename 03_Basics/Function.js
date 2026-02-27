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


//Fubcrion Rest property

function calculateCartPrice(num)
{
    return num;
}

console.log(calculateCartPrice(100,200,300,400)); // 100 it takes the first value

function calculateCartPriceSecond(...num)  // ... -> Rest property 
{
    return num;
}

console.log(calculateCartPriceSecond(100,200,300,400,500,600,700)); // [ 100.2, 300, 400, 500, 600, 700 ] -> Value is stored in array


function calculateCartPriceThird(val1,val2,val3,...num)  // ... -> Rest property 
{
    return num;
}

console.log(calculateCartPriceThird(200,300,400,500,600,700)); //[ 500, 600, 700 ] -> Value (200,300,400 stored in val1, val2, val3) and rest value is print

const myProfile ={
    naame : "Rolina",
    Age : 27,
    Proff : "Engineer"
}

function getMyProfile(anyObject)
{
     console.log(`my name is ${anyObject.naame} & my age is ${anyObject.Age} and my profession is ${anyObject.Proff}`)
}

getMyProfile(myProfile)
getMyProfile({
    naame : "LIRO",
    Age:123,
    Proff : "Java Developer"
})

const myArray = [1,2,3,4,5,6,7]

function getArray(takeArray)
{
    return takeArray[4]
}

console.log(getArray(myArray))