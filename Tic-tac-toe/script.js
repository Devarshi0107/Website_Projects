
let mark = 0;
let move = 0;
const cellContent = new Array(9).fill(null); // Array to track cell content
let resultDiv = document.getElementById("result");
function handleClick() {
    move++;
    console.log(move);

    if (move === 9) {
        console.log("Game draw");
    }

    const th = this;
    th.removeEventListener("click", handleClick);

    // Set image path based on the player
    const imagePath = mark === 0 ?"zero.png" : "cross.png";
    th.innerHTML = `<img src="${imagePath}" alt="player${mark}">`;

    // Save the content in the cellContent array
    cellContent[parseInt(th.id) - 1] = imagePath;

    // Check for a winner after each move
    if (checkWinner()) {
        resultDiv.innerText = `Congratulations, Winner is  Player ${mark + 1} !`;
          // Disable click events on all cells
          disableClickEvents();
          // Add reset button
        // addResetButton();
    } else if (move === 9) {
        resultDiv.innerText = "Game draw";
        // Add reset button
        // addResetButton();
    }

    // Switch player
    mark = 1 - mark;
}

// Iterate over the elements with IDs from 1 to 9
for (let i = 1; i <= 9; i++) {
    const th = document.getElementById(i);
    th.addEventListener("click", handleClick);
}
function disableClickEvents() {
    // Remove click events from all cells
    for (let i = 1; i <= 9; i++) {
        const th = document.getElementById(i);
        th.removeEventListener("click", handleClick);
    }
}

function checkWinner() {
    // Winning combinations for rows, columns, and diagonals
    const winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7]             // Diagonals
    ];

    // Check each winning combination
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        // If all three cells in a combination have the same content, there's a winner
        if (cellContent[a - 1] && cellContent[a - 1] === cellContent[b - 1] && cellContent[b - 1] === cellContent[c - 1]) {
            return true;
        }
    }

    return false; // No winner yet
}
let button=document.getElementById("result");
button.onclick=()=>{
    resetGame();
}


function resetGame() {
    // Reset variables and cell contents
    mark = 0;
    move = 0;
    cellContent.fill(null);

    // Clear resultDiv content and enable click events on cells
    resultDiv.innerText = "";
    for (let i = 1; i <= 9; i++) {
        const th = document.getElementById(i);
        th.innerHTML = "";
        th.addEventListener("click", handleClick);
    }
}