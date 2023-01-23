const options = document.querySelector('.options');
const rock = document.querySelector('.Rock');
const paper = document.querySelector('.Paper');
const scissors = document.querySelector('.Scissors');
const bod = document.querySelector('body');
const audio = document.querySelector('audio');
const gameContent = document.querySelector('.game-content')
const divOfScores = document.querySelector('.Score');

const divOfSelection = document.createElement('div');
divOfSelection.classList.add('Selection');

const divOfRoundResult = document.createElement('div');
divOfRoundResult.classList.add('round-result');

rock.addEventListener('mouseenter', () => {
    rock.classList.add('hovering')
})
paper.addEventListener('mouseenter', () => {
    paper.classList.add('hovering')    
})
scissors.addEventListener('mouseenter', () => {
    scissors.classList.add('hovering')
})

rock.addEventListener('mouseleave', () => {
    rock.classList.remove('hovering')
})
paper.addEventListener('mouseleave', () => {
    paper.classList.remove('hovering')
})
scissors.addEventListener('mouseleave', () => {
    scissors.classList.remove('hovering')
})


rock.addEventListener('click', playRound) 
paper.addEventListener('click', playRound) 
scissors.addEventListener('click', playRound)





function getComputerChoice() {
    let randomNum = Math.random();
    let fixedRandomNum = randomNum.toFixed(1);
    if (fixedRandomNum < 0.3) {
        return "Rock";
    }
    else if (fixedRandomNum >= 0.3 && fixedRandomNum < 0.6) {
        return "Paper";
    }
    else if (fixedRandomNum >= 0.6 && fixedRandomNum <= 1.0) {
        return "Scissors";
    }
}

let playerScore = 0;
let computerScore = 0;


function playRound(e) {
    audio.currentTime = 0;
    audio.play();
    divOfScores.textContent = `You:${playerScore} - Computer:${computerScore}`;
    gameContent.insertBefore(divOfSelection,options );

    let classValue = this.classList.value;
    let computerSelection = getComputerChoice();
    let splittedClassValue = classValue.split(" ");
    let playerSelection = splittedClassValue[0];
    
    divOfSelection.textContent = `Your Selection was: ${playerSelection}  |  Computer selection was: ${computerSelection}\n`
    divOfSelection.appendChild(divOfRoundResult);

    if (playerSelection === computerSelection) {
        divOfRoundResult.textContent = "Draw";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        divOfRoundResult.textContent= "Yay ! You Won, Rock beats Scissors";
        playerScore++;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        divOfRoundResult.textContent="Yay ! You Won, Paper beats Rock";
        playerScore++;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        divOfRoundResult.textContent="Yay ! You Won, Scissors beats Paper";
        playerScore++;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        divOfRoundResult.textContent="Oh No ! You lost, Rock beats Scissors";
        computerScore++;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        divOfRoundResult.textContent="Oh No ! You lost, Scissors beats Paper";
        computerScore++;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        divOfRoundResult.textContent="Oh No ! You lost, Paper beats Rock";
        computerScore++;
    }
    else {
        alert("Something went wrong :(")
    }

   

    if (playerScore === 5 && computerScore < 5){
        divOfRoundResult.textContent= "Congrats! You smashed the computer";
        divOfScores.textContent = `You:${playerScore} - Computer:${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    else if (playerScore < 5 && computerScore === 5){
        divOfRoundResult.textContent = "Unfortunately, The computer smashed you :(";
        divOfScores.textContent = `You:${playerScore} - Computer:${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    divOfScores.textContent = `You:${playerScore} - Computer:${computerScore}`;
     
}



// these line of code were used to log the results in the console.


 
//     console.log ("Your choice : " + capitalizedPlayer);
//     console.log ("Copmuter's choice : " + capitalizedComputer);



//     if (capitalizedPlayer === capitalizedComputer) {
//         return "Draw";
//     }
//     else if (capitalizedPlayer === "ROCK" && capitalizedComputer === "SCISSORS"){
//         return "Yay ! You Won, Rock beats Scissors";
//     }
//     else if (capitalizedPlayer === "PAPER" && capitalizedComputer === "ROCK"){
//         return "Yay ! You Won, Paper beats Rock";
//     }
//     else if (capitalizedPlayer === "SCISSORS" && capitalizedComputer === "PAPER"){
//         return "Yay ! You Won, Scissors beats Paper";
//     }
//     else if (capitalizedPlayer === "SCISSORS" && capitalizedComputer === "ROCK"){
//         return "Oh No ! You lost, Rock beats Scissors";
//     }
//     else if (capitalizedPlayer === "PAPER" && capitalizedComputer === "SCISSORS"){
//         return "Oh No ! You lost, Scissors beats Paper";
//     }
//     else if (capitalizedPlayer === "ROCK" && capitalizedComputer === "PAPER"){
//         return "Oh No ! You lost, Paper beats Rock";
//     }
//     else {
//         alert("Your input was wrong, type your choice again")
//     }
// }



// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let roundResult;
//     for ( let i = 0; i < 5; i++) {
//         console.log ("Round " + (i + 1));
//        switch (i) {
//         case 0:
//             roundResult = playRound(getPlayerChoice(), getComputerChoice());
//             console.log(roundResult);
//             if (roundResult.charAt(0) === 'D'){
//                 playerScore++;
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'Y') {
//                 playerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'O') {
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             break;
//         case 1:
//             roundResult = playRound(getPlayerChoice(), getComputerChoice());
//             console.log(roundResult);
//             if (roundResult.charAt(0) === 'D'){
//                 playerScore++;
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'Y') {
//                 playerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'O') {
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             break;
//         case 2:
//             roundResult = playRound(getPlayerChoice(), getComputerChoice());
//             console.log(roundResult);
//             if (roundResult.charAt(0) === 'D'){
//                 playerScore++;
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'Y') {
//                 playerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'O') {
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             break;
//         case 3:
//             roundResult = playRound(getPlayerChoice(), getComputerChoice());
//             console.log(roundResult);
//             if (roundResult.charAt(0) === 'D'){
//                 playerScore++;
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'Y') {
//                 playerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'O') {
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             break;
//         case 4:
//             roundResult = playRound(getPlayerChoice(), getComputerChoice());
//             console.log(roundResult);
//             if (roundResult.charAt(0) === 'D'){
//                 playerScore++;
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'Y') {
//                 playerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else if (roundResult.charAt(0) === 'O') {
//                 computerScore++;
//                 console.log ("your score: " + playerScore);
//                 console.log ("Computer's score: " + computerScore);
//             }
//             else {
//                 console.log( "Something went wrong :(")
//             }

            
//             if (playerScore > computerScore) {
//                 console.log( "You smashed the computer")
//                 alert("Congrats mate ! you won the game")
//             }
//             else if (playerScore === computerScore) {
//                 console.log( "Draw, what a comptitive game !")
//                 alert("This was a real war ! next time, try to win")
//             }
//             else {
//                 console.log ("The computer smashed you !")
//                 alert("Hard luck ! next time, try to win ")
//             }
//             break;
//        }
        
//     }
// }



// function getPlayerChoice() {
//     let choice = prompt("Type : Rock, Paper, Scissors");
//     return choice;
// }

// console.log(playRound(playerChoice, getComputerChoice()));


