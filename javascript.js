let rowNum = 20;
let colNum = 20;

let gridMap = document.querySelector(".gridMap");
let gridSizeToggle = document.querySelector("button");

gridSizeToggle.addEventListener('click', () => {
    let desiredGridNum = Number(prompt("Enter number of rows and columns", "Max of 100"));
    if (desiredGridNum > 100) {
        alert("Grid size cannot be larger than 100!");
    } else {
        rowNum = desiredGridNum;
        colNum = desiredGridNum;
        removeAllChildNodes(gridMap);
        drawGrids();
    }
});

// create 16x16 grid of square divs
function drawGrids () {
    for (let row = 0; row < rowNum; row++) {
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "row");
        
        for (let col = 0; col < colNum; col++) {
            let gridCol = document.createElement("div");
            gridCol.setAttribute("class", "box");
            gridCol.addEventListener('mouseover', (event) => changeColor(event.target));
            gridRow.appendChild(gridCol);
        }
        gridMap.appendChild(gridRow);
    }
}

function changeColor(box) {
    console.log(box);
    box.setAttribute("class", "color");
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        console.log("removing")
        parent.removeChild(parent.firstChild);
    }
}

drawGrids();