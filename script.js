const gridContainer = document.querySelector(".grid-container");
const scroller = document.querySelector("#scroller");
const output = document.querySelector(".scroller-output");
output.textContent = scroller.value;
let grid = scroller.value;
console.log(grid);
let squareSize = 500/grid;


function createGrid(){
    for(let i = 0; i<grid; i++){
        console.log(grid);  
        const miniContainer = document.createElement("div");
        miniContainer.classList.add("mini-container");
        gridContainer.appendChild(miniContainer);
        miniContainer.setAttribute("style", "display: flex;");
    
        for(let j = 0; j<grid; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("style", `outline: 1px solid black; width: ${squareSize}px; height: ${squareSize}px;`);
            miniContainer.appendChild(square);
        }
    }
}


function drawOnCanvas(){
    const elements = document.querySelectorAll(".square");
    elements.forEach((element)=> {
        element.addEventListener("mouseenter", () => 
            {   element.setAttribute("style", `outline: 1px solid black; width: ${squareSize}px; height: ${squareSize}px; background-color: ${penColor.value};`);
            });
        
        element.addEventListener("mouseleave", () => 
            {   element.setAttribute("style", `outline: 1px solid black; width: ${squareSize}px; height: ${squareSize}px;`);
            });    
    });
}

createGrid();
drawOnCanvas();

const penColor = document.querySelector("#pen-color");
const canvasColor = document.querySelector("#canvas-color");
canvasColor.addEventListener("input", () => {
    gridContainer.style.backgroundColor = canvasColor.value;
});


scroller.addEventListener("input", () => {
    output.textContent = scroller.value;
  });

scroller.addEventListener("change", () => {
    grid = scroller.value;
    squareSize = 500/grid;
    gridContainer.innerHTML = '';
    createGrid();
    drawOnCanvas();
});