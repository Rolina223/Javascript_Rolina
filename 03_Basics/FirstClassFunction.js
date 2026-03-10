
//Diff between Function Statement and Function Expression is -> Hoisting
a(); // a called
b(); // TypeError

//Function statement
function a(){
    console.log("a called");
}

//Function Expression  -> Also used as Anonymous function , A Function without name
 var b = function (){
    console.log("b called");
 } 

 //Function Anonymous
//  function(){

//  }

 //Named Function Expresiion -> Same as Function expresiion but with a function name:
 var c = function cCalled(){
    console.log("c called");
 } 

