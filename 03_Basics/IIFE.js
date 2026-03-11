//IIFE -> Immediaetly Invoked Function Expression

//Namely IIFE
(function coffee(){
    console.log("Coffee");
    
})();

//Arrow IIFE    
( (value) => {
    console.log("Coffe Second with ", `${value}`);
    
})("chai")