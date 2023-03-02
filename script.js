let size = 16;
let area = size * size;

function populateBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i<area; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'lightgrey';
        board.insertAdjacentElement('beforeend', square);
    };
};

populateBoard(size);



