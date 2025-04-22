const container = document.getElementById('container');

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