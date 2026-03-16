
// filter() in JavaScript
// filter() is a Higher Order Function
// It returns a NEW array based on condition


// Basic filter with numbers

const numbers = [1,2,3,4,5,6,7,8,9,10]

// Filter numbers greater than 5
const result = numbers.filter((num) => {
    return num > 5
})

//console.log(result)

// Output
// [6,7,8,9,10]



//Same logic using forEach
// (manual filtering)
// ----------------------------------

const newNums = []

numbers.forEach((num) => {
    if(num > 5){
        newNums.push(num)
    }
})

//console.log(newNums)

// Output
// [6,7,8,9,10]



// filter with array of objects
// Very common in real applications

const books = [

{
    title : "Java Basics",
    language : "Java",
    publish : 2015
},

{
    title : "Python Guide",
    language : "Python",
    publish : 2018
},

{
    title : "Ruby Mastery",
    language : "Ruby",
    publish : 2020
},

{
    title : "Advanced Java",
    language : "Java",
    publish : 2022
}

]


// Filter only Java books
let newBook = books.filter((value) => {
   return value.publish >2016 && value.language=="Java"
})


console.log(newBook)


