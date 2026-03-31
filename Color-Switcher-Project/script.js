const colorCont = document.querySelectorAll('.color-box')
console.log(colorCont);

const body = document.querySelector('body')
console.log(body);
    

const value = document.querySelector('#colorValue')
console.log(value);

const randomBtn = document.querySelector('.randomColor')

const colPick = document.querySelector('#colorPicker')

let colArr = JSON.parse(localStorage.getItem('colors')) || [];

const prevBtn = document.querySelector('.prev')
const historyContainer = document.querySelector('#history')
    
// Div Colors 
    colorCont.forEach(function (box){
        console.log(box)

        box.addEventListener('click' , function(e){
            console.log(e);
            console.log(e.target);
            const color = e.target.dataset.color;
            // body.style.backgroundColor = color;
            // value.textContent = color
            applyColor(color)

        });     
    });

    function applyColor(color){

        body.style.backgroundColor = color
        value.textContent = color
        //localStorage.setItem('bgColor',color)
        colArr.push(color)
         localStorage.setItem('colors', JSON.stringify(colArr))
        console.log(JSON.parse(localStorage.getItem('colors')))
        //JSON.parse(localStorage.getItem('colors'))
        
        // console.log(colArr);
        
    }

const savedColor = localStorage.getItem('bgColor');

if(savedColor){
    applyColor(savedColor);
}
localStorage.clear()

//Random color 
randomBtn.addEventListener('click' , function(){

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    applyColor(randomColor)

})

//Color picker - Input as event because it will perform runtime events
colPick.addEventListener('input', function(e){
    const picker = e.target.value
    applyColor(picker)
})


prevBtn.addEventListener('click', function(){

    historyContainer.innerHTML = ""  // clear previous UI

    colArr.forEach(function(color){

        const div = document.createElement('div')

        div.style.backgroundColor = color
        div.textContent = color

        // optional styling (basic)
        div.style.padding = "5px"
        div.style.margin = "5px"
        div.style.cursor = "pointer"

        //  important
        div.addEventListener('click', function(){
            applyColor(color)
        })

        historyContainer.appendChild(div)
    })
})


    

