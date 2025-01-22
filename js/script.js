const grid = document.querySelector("#grid")

for (let i = 0; i < 16; i++) {
    const box = document.createElement("div")
    box.classList.add("box");
    grid.appendChild(box)
    
    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div")
        box.classList.add("box");
        grid.appendChild(box)
    }
}