const inputFields = document.querySelector('.task_inp')
console.log(inputFields);

 const addButtons = document.querySelector('.AddBtn')
 console.log(addButtons);

 const ulLists = document.querySelector('.tasklist')
 console.log(ulLists);

// //Click on Add button

 addButtons.addEventListener('click' , function(e){
     console.log("Button clicked")
     const userValue = inputFields.value;
     if(userValue === ""){
        console.log("Please enter the value");
        return;
     }
     console.log(userValue);

     const lis = document.createElement('li')

     lis.innerHTML = `
     
     <input type = "checkbox">
     <span>${userValue}</span>
      <button class="DelBtn">Delete</button>
     `;

    ulLists.appendChild(lis);
    inputFields.value = "";


    // let removeIt = e.target.parentNode;
    // removeIt.parentNode.removeChild(removeIt)

    
 });

 //Delete functincality

 ulLists.addEventListener('click' , function(e){

    if(e.target.classList.contains ('DelBtn')){
        //let removeIt = e.target.parentNode;
        let removeIt = e.target.closest('li')  //Better Approach
        removeIt.remove();
        console.log( "Button Deleted");
        
    }

    if(e.target.type ==='checkbox'){
        const li = e.target.closest('li')
        const strike = li.querySelector('span')
        if (e.target.checked) {
        strike.style.textDecoration = 'line-through'
        } else {
        strike.style.textDecoration = 'none'
}

    }
    
 })



