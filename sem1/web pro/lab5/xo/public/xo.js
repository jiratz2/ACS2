document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('rst-btn');
    const messageElement = document.getElementById('message'); // Message element for winner display
    let board = Array(9).fill(null);
    let currentPlayer = 'X';
    let gameActive = true;

    // Winning combinations
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Initialize the game
    function initGame() {
        board.fill(null);
        currentPlayer = 'X';
        gameActive = true;
        messageElement.textContent = ''; // Clear message on restart
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.pointerEvents = 'auto'; // Reactivate the cell for clicks
            cell.style.background = '#1a1357'; // Reset cell color
        });
    }

    // Handle player move
    function playerMove(event) {
        const cellIndex = [...cells].indexOf(event.target);

        if (board[cellIndex] !== null || !gameActive) return; // Ignore if cell is already filled

        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWinner(currentPlayer)) {
            gameActive = false;
            highlightWinningCells();
            displayWinner(`${currentPlayer} Wins!`);
            return;
        }

        if (board.every(cell => cell !== null)) {
            gameActive = false;
            displayWinner("It's a Draw!");
            return;
        }

        currentPlayer = 'O'; // Switch to computer
        computerMove();
    }

    // Handle computer's random move
    function computerMove() {
        let availableCells = board
            .map((value, index) => (value === null ? index : null))
            .filter(value => value !== null);

        let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];

        board[randomIndex] = 'O';
        cells[randomIndex].textContent = 'O';
        cells[randomIndex].style.pointerEvents = 'none'; // Prevent further clicks on this cell

        if (checkWinner('O')) {
            gameActive = false;
            highlightWinningCells();
            displayWinner('O Wins!');
            return;
        }

        if (board.every(cell => cell !== null)) {
            gameActive = false;
            displayWinner("It's a Draw!");
            return;
        }

        currentPlayer = 'X'; // Switch back to player
    }

    // Check for a winner
    function checkWinner(player) {
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }

    // Highlight winning cells (if any)
    function highlightWinningCells() {
        winningCombinations.forEach(combination => {
            if (combination.every(index => board[index] === currentPlayer)) {
                combination.forEach(index => {
                    cells[index].style.background = 'rgb(255, 79, 173)';
                });
            }
        });
    }

    // Display winner or draw message
    function displayWinner(message) {
        messageElement.textContent = message; // Show the message above the board
    }

    // Restart the game
    restartButton.addEventListener('click', initGame);

    // Add event listeners to each cell
    cells.forEach(cell => {
        cell.addEventListener('click', playerMove);
    });

    // Start the game initially
    initGame();
});
