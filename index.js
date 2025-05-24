const resetButton = document.getElementById('resetBtn');
const gameBoard = document.getElementById('box');
const playerForm = document.getElementById('playerForm');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const statusMessage = document.createElement('p');
statusMessage.textContent = `Current Player: ${currentPlayer}`;

document.body.appendChild(statusMessage);

const cells = document.getElementsByClassName('cell');

const handleCellClick = (clickedCell, clickedCellIndex) => {
    if (gameState[clickedCellIndex] !== '' || !gameActive) return;

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());

    checkWin();
};

const checkWin = () => {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (
            gameState[a] &&
            gameState[a] === gameState[b] &&
            gameState[a] === gameState[c]
        ) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusMessage.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    const roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusMessage.textContent = 'Game ended in a draw!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusMessage.textContent = `Current Player: ${currentPlayer}`;
};

const resetBoard = () => {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusMessage.textContent = `Current Player: ${currentPlayer}`;


    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        cells[i].classList.remove('x', 'o');
    }
};


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => handleCellClick(cells[i], i));
}

resetButton.addEventListener('click', resetBoard);