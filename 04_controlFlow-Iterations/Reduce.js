
const arr =  [1,5,10]

const res = arr.reduce( function(acc,CurVal) {
    return acc + CurVal
},5)

console.log(res);

const result = arr.reduce((acc,curVal) => {  

    console.log(`${acc} is accu val and current value is ${curVal}`)
    return acc + curVal
},2)
   


console.log(result);

