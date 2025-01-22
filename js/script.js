const grid = document.querySelector("#grid")
const button = document.querySelector('#input')
let userInput = 16;

// Random integer function so I can set random RGB Values of the background.
const getRandom = () => {
    return Math.floor(Math.random() * (256 - 0) + 0)
}

const createGrid = (userInput) => {
    for (let y = 0; y < userInput; y++) {
        //Create row
        const row = document.createElement("div") 
        row.classList.add("row")
        grid.appendChild(row)
        
        for (let x = 0; x < userInput; x++) {
            //Create boxes within row
            const div = document.createElement("div")
            const box = document.createElement("div")
            
            div.setAttribute("style","background: ");
            
            box.classList.add("box");
            div.classList.add("border")
            div.classList.add("box");

            div.appendChild(box);
            row.appendChild(div);
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
                elem.setAttribute("style","background: rgb("+r+","+g+","+b+")");
                // elem.setAttribute("style","opacity:0.1");
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

