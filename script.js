const gridContainer = document.querySelector(".grid-container");
let grid = 2;
let size = 500/grid;


for(let i = 0; i<grid; i++){
    const miniContainer = document.createElement("div");
    miniContainer.classList.add("mini-container");
    gridContainer.appendChild(miniContainer);
    miniContainer.setAttribute("style", "display: flex;");

    for(let j = 0; j<grid; j++){
        const square = document.createElement("div");
        square.classList.add("square");
    
        square.setAttribute("style", `border: 1px solid black; width: ${size}px; height: ${size}px;`);
        miniContainer.appendChild(square);
    }

}

