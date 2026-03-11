
function one(){
    const userName ="Robin";
    console.log("i am printing")
    function two(){
        const id ="123Abc";
        console.log(userName + " " +  id);
    }
   // console.log(id);
   two();
    
}

one();


// --------------------Mini Hoisting-----------------

console.log(addOne);
//console.log(addTwo);

console.log(addOne(2));
//console.log(addTwo(3));





function addOne(number){
    return number +1;
}

const addTwo = function(number){
    return number+ 2;
}

console.log(addTwo(2));

