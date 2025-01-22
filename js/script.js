const grid = document.querySelector("#grid")

let xAxisUserInput = 16;
let yAxisUserInput = 16;

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

const createGrid = (xAxisUserInput,yAxisUserInput) => {
    for (let y = 0; y < yAxisUserInput; y++) {
        //Create row
        const row = document.createElement("div") 
        row.classList.add("row")
        grid.appendChild(row)
        
        for (let x = 0; x < xAxisUserInput; x++) {
            //Create boxes within row
            const box = document.createElement("div")
            box.classList.add("box");
            //Adds box into row
            row.appendChild(box)
         }
    }

}
createGrid(xAxisUserInput,yAxisUserInput);

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
    alert("clicked")
});