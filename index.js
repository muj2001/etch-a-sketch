const container = document.querySelector('.container');
let gridContainer = document.querySelector('.grid-container');

const button = document.querySelector('button');

button.addEventListener("click", (e) => {
    // console.log(e.target);
    const squaresInput = document.querySelector('.cols');
    // const row_input = document.querySelector('.rows');
    let squares = Number(squaresInput.value);
    // let row = Number(row_input.value);
    // console.log(typeof(col));
    // console.log(typeof(row));
    if (Number.isInteger(squares) && squares  && squares > 0) {
        // console.log('Ok.');
        removeGrid()
        createGrid(squares, squares);
    } else {
        alert("Invalid Inputs")
    }
})


console.log(container);
console.log(gridContainer)

createGrid(16, 16);

// removeGrid()

function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        
        const boxRow = document.createElement('div');
        boxRow.className = 'box-row'
        gridContainer.appendChild(boxRow);

        for (let j = 0; j < cols; j++) {

            const box = document.createElement('div');
            box.className = 'box';
            boxRow.appendChild(box);
        };
    };
    console.log("HOVER LISTENERS ACTIVATED");
    addBoxHoverListeners();
};

function removeGrid() {
    gridContainer.remove()
    gridContainer = document.createElement('div');
    gridContainer.className = "grid-container";
    container.appendChild(gridContainer);
}

function addBoxHoverListeners() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            console.log(e.target.style.opacity);
            let opacity = Number(e.target.style.opacity);
            console.log(opacity);
            opacity = opacity + 0.1;
            e.target.style.opacity = String(opacity);
        });
    });
};