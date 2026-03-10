const arr = [1,32,5,3,4];

const area = function(arr)
{
    return Math.PI * arr * arr;
}

const circumferance = function(arr)
{
    return 2 * Math.PI * arr;
}

const Diameter = function(arr)
{
    return 2* arr;
}

const calculate = function(arra,logic)
{
    const output =[];
    for(let i =0 ;i<arra.length; i++)
    {
        output.push(logic(arra[i]));
    }
        return output;
}

console.log(calculate(arr,Diameter));
console.log(calculate(arr,area));