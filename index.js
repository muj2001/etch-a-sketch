const container = document.querySelector('.container');
let gridContainer = document.querySelector('.grid-container');

const button = document.querySelector('button');

button.addEventListener("click", (e) => {
    // console.log(e.target);
    const col_input = document.querySelector('.cols');
    const row_input = document.querySelector('.rows');
    let col = Number(col_input.value);
    let row = Number(row_input.value);
    // console.log(typeof(col));
    // console.log(typeof(row));
    if (Number.isInteger(col) && Number.isInteger(row) && col <= 100 && row <= 100 && col > 0 && row > 0) {
        // console.log('Ok.');
        removeGrid()
        createGrid(row, col);
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
};

function removeGrid() {
    gridContainer.remove()
    gridContainer = document.createElement('div');
    gridContainer.className = "grid-container";
    container.appendChild(gridContainer);
}