const container = document.getElementById('container');

/*
const gridSize = 16;
const totalSquares = gridSize * gridSize;

for (let i = 0; i < totalSquares; i++ ) {
    const grid = document.createElement('div');
    grid.classList.add('grid-square');
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = '#333';
    });
    container.appendChild(grid);

    const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener("click", () => {
    grid.style.backgroundColor = 'white';
    console.log("clicked");
});
}
*/

const input = document.getElementById('grid-count');
const createBtn = document.getElementById('create-grid');

function createGrid(size) {
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '640px';
    container.style.height = '640px';

    const gridSize = 640 / size;

    const totalGrids = size * size;

    for (let i = 0; i < totalGrids; i++ ) {
        const grid = document.createElement('div');
        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;
        grid.style.border = '1px solid #333';
        grid.classList.add('grid-square');

        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'black';
        });
        container.appendChild(grid);

        const clearBtn = document.getElementById('clear-btn');

        clearBtn.addEventListener("click", () => {
            grid.style.backgroundColor = 'white';
            console.log("clicked");
        });
    }

};

createBtn.addEventListener('click', () => {
    const userInput = input.value;
    const gridSize = parseInt(userInput);
    if (!isNaN(gridSize) && gridSize > 0) {
        createGrid(gridSize);
    } else {
        alert('Enter a valid number dipshit')
    }
});