function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        console.log("Computer chose: Scissors");
    } else if (choice == 1) {
        console.log("Computer chose: Rock");
    } else if (choice == 2) {
        console.log("Computer chose: Paper");
    }
    return choice;
}

function getHumanChoice () {
    let playerChoice = prompt("[1] Rock | [2] Paper | [3] Scissors?")
    switch (parseInt(playerChoice)) {
        case 1:
            console.log('You chose Rock')
            break;
        case 2:
            console.log('You chose Paper')
            break;
        case 3:
            console.log('You chose Scissors')
            break;
    }
    return playerChoice
}


function playRound () {
    let winner = ''
    while (winner == '') {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        if ((humanChoice - computerChoice) == 1) {
            console.log("Congrats, you win!")
            return winner = 'human';
        } else if ((humanChoice - computerChoice) < 0 || (humanChoice - computerChoice) == 2) {
            console.log("Bummer dude, Computer won that time.")
            return winner = 'computer'
        } else {
            console.log('Tie! Go again!')
        }
    }
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