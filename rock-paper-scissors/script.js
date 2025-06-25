const playerDisplay = document.getElementById("resultPlayer");
const computerDisplay = document.getElementById("resultComputer");
const displayOutput = document.getElementById("displayOutput");

function play(input) {
    let computerTurn = Math.floor(Math.random() * 3 + 1);
    let playerTurn = input; 
    displayOutput.classList.add("active");

    switch (computerTurn) {
        case 1: computerDisplay.textContent = "rock"; break;
        case 2: computerDisplay.textContent = "paper"; break;
        case 3: computerDisplay.textContent = "scissor"; break;
    }
    
    switch (playerTurn) {
        case "1": playerDisplay.textContent = "rock"; break;
        case "2": playerDisplay.textContent = "paper"; break;
        case "3": playerDisplay.textContent = "scissor"; break;
    }

    if (computerTurn == playerTurn) {
        displayOutput.textContent = "It's a tie!"
        displayOutput.classList.remove("winner");
        displayOutput.classList.remove("loser");
        displayOutput.classList.remove("winner");
        displayOutput.classList.remove("loser");
        displayOutput.classList.add("tie");
    }
    else {
        if ((computerDisplay.textContent === "rock" && playerDisplay.textContent === "paper") ||
            (computerDisplay.textContent === "paper" && playerDisplay.textContent === "scissor") ||
            (computerDisplay.textContent === "scissor" && playerDisplay.textContent === "rock")) {
            displayOutput.textContent = "You win!";
            displayOutput.classList.remove("loser");
            displayOutput.classList.remove("tie");
            displayOutput.classList.add("winner");
        }
        else if ((computerDisplay.textContent === "rock" && playerDisplay.textContent === "scissor") ||
            (computerDisplay.textContent === "paper" && playerDisplay.textContent === "rock") ||
            (computerDisplay.textContent === "scissor" && playerDisplay.textContent === "paper")) {
            displayOutput.textContent = "Computer wins!";
            displayOutput.classList.remove("winner");
            displayOutput.classList.remove("tie");
            displayOutput.classList.add("loser");
        }
    }
}