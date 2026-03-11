//IIFE -> Immediaetly Invoked Function Expression

(function coffee(){
    console.log("Coffee");
    
})();

( (value) => {
    console.log("Coffe Second with ", `${value}`);
    
})("chai")