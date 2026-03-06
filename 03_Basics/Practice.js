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