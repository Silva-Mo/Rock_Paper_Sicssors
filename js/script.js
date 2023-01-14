function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    }
    else if (randomNum === 1) {
        return "Paper";
    }
    else if (randomNum === 2) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let capitalizedPlayer = playerSelection.toUpperCase();
    let capitalizedComputer = computerSelection.toUpperCase();
    console.log ("Your choice : " + capitalizedPlayer);
    console.log ("Copmuter's choice : " + capitalizedComputer);

    if (capitalizedPlayer === capitalizedComputer) {
        return "Draw";
    }
    else if (capitalizedPlayer === "ROCK" && capitalizedComputer === "SCISSORS"){
        return "Yay ! You Won, Rock beats Scissors";
    }
    else if (capitalizedPlayer === "PAPER" && capitalizedComputer === "ROCK"){
        return "Yay ! You Won, Paper beats Rock";
    }
    else if (capitalizedPlayer === "SCISSORS" && capitalizedComputer === "PAPER"){
        return "Yay ! You Won, Scissors beats Paper";
    }
    else if (capitalizedPlayer === "SCISSORS" && capitalizedComputer === "ROCK"){
        return "Oh No ! You lost, Rock beats Scissors";
    }
    else if (capitalizedPlayer === "PAPER" && capitalizedComputer === "SCISSORS"){
        return "Oh No ! You lost, Scissors beats Paper";
    }
    else if (capitalizedPlayer === "ROCK" && capitalizedComputer === "PAPER"){
        return "Oh No ! You lost, Paper beats Rock";
    }
    else {
        alert("Your input was wrong, type your choice again")
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    for ( let i = 0; i < 5; i++) {
        console.log ("Round " + (i + 1));
       switch (i) {
        case 0:
            roundResult = playRound(getPlayerChoice(), getComputerChoice());
            console.log(roundResult);
            if (roundResult.charAt(0) === 'D'){
                playerScore++;
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'Y') {
                playerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'O') {
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            break;
        case 1:
            roundResult = playRound(getPlayerChoice(), getComputerChoice());
            console.log(roundResult);
            if (roundResult.charAt(0) === 'D'){
                playerScore++;
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'Y') {
                playerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'O') {
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            break;
        case 2:
            roundResult = playRound(getPlayerChoice(), getComputerChoice());
            console.log(roundResult);
            if (roundResult.charAt(0) === 'D'){
                playerScore++;
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'Y') {
                playerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'O') {
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            break;
        case 3:
            roundResult = playRound(getPlayerChoice(), getComputerChoice());
            console.log(roundResult);
            if (roundResult.charAt(0) === 'D'){
                playerScore++;
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'Y') {
                playerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'O') {
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            break;
        case 4:
            roundResult = playRound(getPlayerChoice(), getComputerChoice());
            console.log(roundResult);
            if (roundResult.charAt(0) === 'D'){
                playerScore++;
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'Y') {
                playerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else if (roundResult.charAt(0) === 'O') {
                computerScore++;
                console.log ("your score: " + playerScore);
                console.log ("Computer's score: " + computerScore);
            }
            else {
                console.log( "Something went wrong :(")
            }

            
            if (playerScore > computerScore) {
                console.log( "You smashed the computer")
                alert("Congrats mate ! you won the game")
            }
            else if (playerScore === computerScore) {
                console.log( "Draw, what a comptitive game !")
                alert("This was a real war ! next time, try to win")
            }
            else {
                console.log ("The computer smashed you !")
                alert("Hard luck ! next time, try to win ")
            }
            break;
       }
        
    }
}



function getPlayerChoice() {
    let choice = prompt("Type : Rock, Paper, Scissors");
    return choice;
}

console.log(game());


