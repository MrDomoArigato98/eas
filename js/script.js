const grid = document.querySelector("#grid")



for (let y = 0; y < 16; y++) {
    //Creates box
    const box = document.createElement("div")
    box.classList.add("box");
    //Adds box into a div going across X axis
    const boxContainer = document.createElement("div")
    boxContainer.classList.add("boxContainer")
    //Adds box into box container, then adds container into grid.
    boxContainer.appendChild(box)
    grid.appendChild(boxContainer)
    
    for (let x = 0; x < 15; x++) {
        const box = document.createElement("div")
        box.classList.add("box");
        //Adds box into a div going across X axis
        const boxContainer = document.createElement("div")
        boxContainer.classList.add("boxContainer")
        //Adds box into box container, then adds container into grid.
        boxContainer.appendChild(box)
        grid.appendChild(boxContainer)
     }
}