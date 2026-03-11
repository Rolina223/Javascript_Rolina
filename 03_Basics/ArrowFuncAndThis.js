const userDetails = {

    userName : "Rolina",
    email : "www.@gmail.com",

    userWelcome : function(){

        const secondUserName = "Roblina";
       
        console.log(`${this.userName} Welcome to Aiprot`);
        console.log(this)
        
    }

}


// userDetails.userWelcome()
// //userDetails.userWelcome(this)
// userDetails.userName ="Killer"
// userDetails.userWelcome()
// console.log(this) //{}



function oneOne()
{
   // console.log(this);
    
}

function tow(){
    const name = "Rolina";
   // console.log(this.name); //undefined -> This only works inside objects 
    
}



//+++++++++++++++++++++++++++ Arrow Function +++++++++++++++++

const kaisen = () => {
    console.log("Lost");
    
}

const addNumber = (num1 , num2 ,num3) => {

    return num1 + num2 + num3;

}

const add = (num,num2) => ( num + num2)

kaisen()
console.log(addNumber(1,6,3));
console.log(add(3,8 ));


