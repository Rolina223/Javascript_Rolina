const mapp = new Map();
mapp.set('In' , "India")
mapp.set('Br',"Bihar")
mapp.set('jk' , "Jharkand")
mapp.set('BD', "Bangladesh")

for (const value of mapp) {
    //console.log(value);
    
}

for (const [key,value] of mapp) {
    console.log(key +" -" + value);
    
}
