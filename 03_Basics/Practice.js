function a()
{
    let b = 90;
    function c()
    {
        console.log(b);
        
    }
    return c;
}

var y =a();
y();


for (var i = 1; i <= 3; i++) {
    console.log(" hey hey")
    setTimeout(function () {
        console.log(i);
    }, 1000);
}


console.log("Start")

function cb()
{
    console.log("Call back");
    
}

setTimeout(cb,3000);

console.log("End");
console.log("start");

setTimeout(function bcb(){
    console.log("Heyyyyyyyyyyyyyyy");
    
},6000);

console.log("Default");


