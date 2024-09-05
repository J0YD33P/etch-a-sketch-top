const container = document.querySelector(".container");
const gridContainer = document.querySelector(".grid-container");
const menu = document.querySelector(".menu");
const penColor = document.querySelector("#pen-color");
const canvasColor = document.querySelector("#canvas-color");
const scroller = document.querySelector("#scroller");
const output = document.querySelector(".scroller-output");
output.textContent = scroller.value; // Displays the text below the scroller
let grid = scroller.value; // Total number of squares to be present within the grid container
let squareSize = 500/grid; // Size of each square. The grid container is 500px in width and height
let mode = 'regular';
const rainbowColorsList = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#8B00FF"  // Violet
]



function createGrid(){
    for(let i = 0; i<grid; i++){
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

const squareSelect = document.querySelector(".square");

// Event Delegation
container.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case 'regular-mode':
            mode = 'regular';
            updateCanvas(canvasMouseColor);
            break;
        case 'rainbow-mode':
            mode = 'rainbow';
            updateCanvas(canvasMouseColor);
            break;
        case 'dark-mode':
            mode = 'dark';
            updateCanvas(darkMode);
            break;
        case 'eraser':
            updateCanvas(canvasMouseErase);
            break;
        case 'clear-canvas':
            gridContainer.innerHTML = '';
            createGrid();
            updateCanvas(canvasMouseColor);
            break;
    }

});

function updateCanvas(eventHandler){
    gridContainer.addEventListener("mouseover", (event) => {
        if(event.target.classList.contains("square")){
            eventHandler(event);
        }
    })
}

function canvasMouseColor(e){
    if (mode === 'regular'){
        e.target.style.opacity = 1;
        e.target.style.background = penColor.value;
    }
    if (mode === 'rainbow'){
        e.target.style.opacity = 1;
        const randomRainbowColor = Math.floor(Math.random() * rainbowColorsList.length);
        e.target.style.background = rainbowColorsList[randomRainbowColor];
    }
    // element.setAttribute("style", `outline: 1px solid black; width: ${squareSize}px; height: ${squareSize}px; background-color: ${penColor.value};`);
}

let opacity = 0.1; 
let increasing = true; // Flag to track if we're incrementing or decrementing

function darkMode(e) {
    // Set the background color to black
    e.target.style.background = '#000000';

    // Update the opacity value
    e.target.style.opacity = opacity.toFixed(1);
    console.log(e.target.style.opacity);

    // Check if we are increasing or decreasing the opacity
    if (increasing) {
        opacity += 0.1;
        if (opacity >= 0.9) {
            increasing = false; // Start decrementing when opacity reaches 1
        }
    } else {
        opacity -= 0.1;
        if (opacity <= 0.2) {
            increasing = true; // Start incrementing when opacity reaches 0.1
        }
    }
}

function canvasMouseErase(e){   
    e.target.style.background = "";
    // element.setAttribute("style", `outline: 1px solid black; width: ${squareSize}px; height: ${squareSize}px;`);
}

// Draw the default grid and enable the pen
createGrid();
updateCanvas(canvasMouseColor);
// drawOnCanvas();

//Change canvas color and scroller output number using event delegation
menu.addEventListener("input", (e) => {
    let target = e.target;

    switch(target.id){
        case 'canvas-color':
            gridContainer.style.backgroundColor = canvasColor.value;
            break;
        case 'scroller':
            output.textContent = scroller.value;
            break;            
    }

})

// Change the size of the grid and the squares based on the change in the value of the scroller
scroller.addEventListener("change", () => {
    grid = scroller.value;
    squareSize = 500/grid;
    gridContainer.innerHTML = ''; // Clear the grid prior to creating a new one
    createGrid();
    drawOnCanvas();
});





// Old Code without event delegation


// function drawOnCanvas(){
//     const elements = document.querySelectorAll(".square");
//     elements.forEach((element)=> {
//         element.addEventListener("mouseenter", canvasMouseColor);
//     });
// }

// function eraser(){
//     const elements = document.querySelectorAll(".square");
//     elements.forEach((element)=> {
//         element.addEventListener("mouseenter", canvasMouseErase);
//     });
// }

// Change canvas color
// canvasColor.addEventListener("input", () => {
//     gridContainer.style.backgroundColor = canvasColor.value;
// });

// Change scroller value
// scroller.addEventListener("input", () => {
//     output.textContent = scroller.value;
//   });