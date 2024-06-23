const GRID_ROW = 4;
const GRID_COL = 4;

let gridMap = document.querySelector(".gridMap");

// create 16x16 grid of square divs
for (let row = 0; row < GRID_ROW; row++) {
    let gridRow = document.createElement("div");
    
    for (let col = 0; col < GRID_COL; col++) {
        let gridCol = document.createElement("div");
        gridCol.setAttribute("class", "box");
        gridCol.addEventListener('mouseover', (event) => changeColor(event.target));
        gridRow.appendChild(gridCol);
    }
    gridMap.appendChild(gridRow);
}

function changeColor(box) {
    // change color of grid
    console.log(box);
    box.setAttribute("class", "color");
}