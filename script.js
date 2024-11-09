let rockImg = document.getElementById("rock");
let paperImg = document.getElementById("paper");
let scissorsImg = document.getElementById("scissors");
let humanScore = document.getElementById("human-score");
let computerScore = document.getElementById("computer-score");
let rpsGameContainer = document.getElementById("rps-container");

var rpsGame = rpsGameContainer.addEventListener('click', clickGame);

function clickGame(target) {
    let winner = playRound(target);
    if (winner == 'human') {
        let humanPoints = Number(humanScore.textContent);
        humanPoints += 1;
        humanScore.innerHTML = humanPoints
    } else if (winner == 'computer') {
        let computerPoints = Number(computerScore.textContent);
        computerPoints += 1;
        computerScore.innerHTML = computerPoints
    }
    updateColors()
}


function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        alert("Computer chose: Scissors");
    } else if (choice == 1) {
        alert("Computer chose: Rock");
    } else if (choice == 2) {
        alert("Computer chose: Paper");
    }
    return choice;
}

function getHumanChoice(target) {
    let playerChoice = target.target.id
    switch (playerChoice) {
        case 'rock':
            console.log('You chose Rock')
            playerChoice = 1;
            break;
        case 'paper':
            console.log('You chose Paper')
            playerChoice = 2;
            break;
        case 'scissors':
            console.log('You chose Scissors')
            playerChoice =3
            break;
    }
    return playerChoice
}


function playRound (target) {
    let winner = ''
    let humanChoice = getHumanChoice(target);
    let computerChoice = getComputerChoice();
    if ((humanChoice - computerChoice) == 1) {
        alert("Congrats, you win!")
        return winner = 'human';
    } else if ((humanChoice - computerChoice) < 0 || (humanChoice - computerChoice) == 2) {
        alert("Bummer dude, Computer won that time.")
        return winner = 'computer'
    } else {
        alert('Tie! Go again!')
    } return winner
}

function playGame () {  
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Your Score: ${humanScore}     Computer Score: ${computerScore}`);
        let winner = playRound();
        if (winner == 'human') {
            humanScore += 1;
        } else {
            computerScore += 1;
        }
    }
    console.log(`Your final score: ${humanScore}    Computer Score: ${computerScore}`)
} 

function updateColors () {
    let computerPoints = Number(computerScore.textContent);
    let humanPoints = Number(humanScore.textContent);
    if (humanPoints > computerPoints) {
        humanScore.style.color = "green";
        computerScore.style.color = "red";
    } else if (humanPoints < computerPoints) {
        humanScore.style.color = "red";
        computerScore.style.color = "green";
    } else {
        humanScore.style.color = "black";
        computerScore.style.color = "black";
    }
}