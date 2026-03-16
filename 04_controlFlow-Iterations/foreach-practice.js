const myArr =["cri","Foot","Rug","Hock"]

//
myArr.forEach(function (item) {
  //console.log(item);
  
})

//Arrow function
// myArr.forEach((value) => {
//      // console.log(value);
// })

// function chai(){
//     const uname = "Abasbs"
//     console.log(this);
    
// }
// chai()

// const funct = () => {
//     let uname = "Abasbs"
//     console.log(this);
// }


function printing(items)
{
    //console.log(items);   
}

myArr.forEach(printing)


myArr.forEach( (item,index,array) => {
        //console.log(item, index,array);       
})

// cri 0 [ 'cri', 'Foot', 'Rug', 'Hock' ]
// Foot 1 [ 'cri', 'Foot', 'Rug', 'Hock' ]
// Rug 2 [ 'cri', 'Foot', 'Rug', 'Hock' ]
// Hock 3 [ 'cri', 'Foot', 'Rug', 'Hock' ]

const newArr = [

{
    name : "OneCode",
    lnaguage: "Java"
},

{
    name : "TwoCode",
    lnaguage: "Python"
},

{
    name : "ThreeCode",
    lnaguage: "ruby"
}

]

newArr.forEach( (item) => {
    console.log(item.name);
    console.log(item.lnaguage);
    
    
})