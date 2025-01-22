const grid = document.querySelector("#grid")

let xAxisUserInput = 0;
let yAxisUserInput = 0;

for (let y = 0; y < 16; y++) {
    //Create row div
    const row = document.createElement("div")
    row.classList.add("row")
    grid.appendChild(row)
    
    for (let x = 0; x < 16; x++) {
        //Create box within row div
        const box = document.createElement("div")
        box.classList.add("box");
        //Adds box into a div going across X axis
        const row = document.createElement("div")
        row.classList.add("row")
        //Adds box into box container, then adds container into grid.
        row.appendChild(box)
        grid.appendChild(row)
     }
}

// function createGridRow(xAxisUserInput){
//     for (let x = 0; x < xAxisUserInput; x++) {

//     }

// }

// function createGridColumn(yAxisUserInput){
//     for (let y = 0; y < yAxisUserInput; y++) {

//     }

// }

//Get all elements with class box
// let divArray = document.querySelectorAll(".box");
// console.log(divArray);
// divArray.forEach(function (elem) {
//     elem.addEventListener("mouseover", function() {
//         elem.classList.add("hover");
//     });  
// })