const grid = document.querySelector("#grid")
const button = document.querySelector('#input')
let userInput = 16;

// Random integer function so I can set random RGB Values of the background.
const getRandom = () => {
    return Math.floor(Math.random() * (256 - 0) + 0)
}

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
    //Add listener each time grid is created.
    let divArray = document.querySelectorAll(".box");
    divArray.forEach(function (elem) {
        elem.addEventListener("mouseover", function() {
            let r,g,b;
            r = getRandom()
            g = getRandom()
            b = getRandom()
            
            if(!elem.hasAttribute("style")){
                console.log("nice")
                elem.setAttribute("style","background: rgb("+r+","+g+","+b+")");
                // elem.setAttribute("style","opacity:")
            }
        });  
    })
}

//Event listener to button on click
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




createGrid(userInput);

