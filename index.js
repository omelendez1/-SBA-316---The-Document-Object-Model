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