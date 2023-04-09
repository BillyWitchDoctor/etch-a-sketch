let color = "black";

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove);
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let area = size * size;


    for (let i = 0; i<area; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square); 
        square.addEventListener("mouseover", colorSquare);
    };
};

populateBoard(16);

function newSize(input) {
    if (input >= 2 && input <= 100) {
        populateBoard(input);

        let boardSizeInput = document.getElementById('board_size');
        boardSizeInput.value = '';

        let board = document.querySelector(".board");
        let squares = board.querySelectorAll("div");
        squares.forEach((div) => div.style.backgroundColor = "white");
    }
    else {
        alert("Please enter a number between 2 and 100");
    }
};

function colorSquare() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = color;
    };
};

function changeColor(choice) {
    color = choice;
};

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
};
