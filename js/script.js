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