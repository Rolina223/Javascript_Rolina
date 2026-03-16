// const mapp = new Map();
// mapp.set('In' , "India")
// mapp.set('Br',"Bihar")
// mapp.set('jk' , "Jharkand")
// mapp.set('BD', "Bangladesh")

// for (const value of mapp) {
//     //console.log(value);
    
// }

// for (const [key,value] of mapp) {
//     console.log(key +" -" + value);
    

//For in

const myObj = {
     a :"Apple",
     b: "Ball",
     c:"Cat",
     D: "Dog"
}

//For-OF loop is not working for objects  - myObj is not iterable
// for (const [keys,value] of myObj) {
//     console.log(keys,value);             
    
// }

for (const key in myObj) {
   //console.log(key);

}

// output is key value 
// a
// b
// c
// D 
//once we got the key we fetch the value

for (const [key] in myObj) {
       // console.log(myObj[key]);
        
}

//output 
// Apple
// Ball
// Cat
// Dog

for (const [key] in myObj) {
        
    console.log(`${key} the value is ${myObj[key]} `);
    
}

//output
// a the value is Apple 
// b the value is Ball 
// c the value is Cat
// D the value is Dog