const grid = document.querySelector("#grid")

let userInput = 16;

// for (let y = 0; y < 16; y++) {
//     //Create row div
//     const row = document.createElement("div") 
//     row.classList.add("row")
//     grid.appendChild(row)
    
//     for (let x = 0; x < 16; x++) {
//         //Create box within row div
//         const box = document.createElement("div")
//         box.classList.add("box");
//         //Adds box into box container, then adds container into grid.
//         row.appendChild(box)
//      }
// }

const createGrid = (userInput) => {
    for (let y = 0; y < userInput; y++) {
        //Create row
        const row = document.createElement("div") 
        row.classList.add("row")
        grid.appendChild(row)
        
        for (let x = 0; x < userInput; x++) {
            //Create boxes within row
            const box = document.createElement("div")
            box.classList.add("box");
            //Adds box into row
            row.appendChild(box)
         }
    }
}

createGrid(userInput);

//Create an Event Listener for mouseover which adds black background
let divArray = document.querySelectorAll(".box");
console.log(divArray);
divArray.forEach(function (elem) {
    elem.addEventListener("mouseover", function() {
        elem.classList.add("hover");
    });  
})

let button = document.querySelector('#input')
console.log(button)
button.addEventListener("click", function(){
    let userInput = prompt()
    
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    if(userInput >100){
        userInput = 100;
    }
    createGrid(userInput);
});