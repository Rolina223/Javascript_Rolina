const arr = [1,2,3,4,5,6,7,8,9]

//chaining
const res = arr.map( (val) => val *10)
             .map((val) => val +5)
                .filter((val) => val >50)  

   console.log(res);
                

   const users = [

{
    name : "Robin",
    age : 21
},

{
    name : "Sam",
    age : 19
},

{
    name : "John",
    age : 25
}

]

// Extract only names

const usernames = users.map((user) => {
    return user.name
})

console.log(usernames)