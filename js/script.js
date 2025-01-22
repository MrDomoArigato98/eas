const grid = document.querySelector("#grid")

const boxContainer = document.createElement("div")
boxContainer.classList.add("boxContainer")

for (let y = 0; y < 16; y++) {
    const box = document.createElement("div")
    box.classList.add("box");
    grid.appendChild(box)
    
    // for (let x = 0; x < 16; x++) {
    //     const box = document.createElement("div")
    //     box.classList.add("box");
    //     grid.appendChild(box)
    // }
}