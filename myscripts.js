
function getComputerChoice() {
   const number = Math.floor(Math.random()*3);
   let choice;
    if (number === 0) {
        choice = "paper";
    } else if (number === 1)  {
        choice = "rock";
    } else {
        choice = "scissors";
    }
    return choice; 
}
 

function getHumanChoice () {
    let userInput = prompt("Rock, paper, or scissors?");
    return userInput.toLowerCase();
}

let humanScore = 0
let computerScore = 0



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "It's a tie!"; 
    // End of tie  
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++; 
        return "You win! Rock beats Scissors";
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    }
    if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win! Scissors beats Paper";
    }
    // End of Human Wins
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
}
}

function playGame () {
    for (let i = 1 ; i <=5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Round ${i}`);
    console.log("Computer:" + computerChoice);
    console.log("You:" + humanChoice);
    console.log(playRound(humanChoice, computerChoice))
    console.log(`Score - you: ${humanScore} , Computer: ${computerScore}`);
    console.log('-----------------------------');
}
}

function announceWinner () {
    if (humanScore > computerScore) {
        return "Congratulations! You are the winner";
    } else if (computerScore > humanScore) {
        return "Sorry! You are the loser";
    } else { 
        return "It's a tie!"
    }
}

//=======================================================================================

playGame();
console.log(announceWinner());


// ==========================================================================================

// for (initialization; condition; update)


// function getComputerChoice2() {
//    const number = Math.floor(Math.random()*3);
//    let choice
//     if (console.log('paper if') || number === 0) choice = "paper";
//     else if (console.log('rock if') || number === 1) choice = "rock";
//     else if (console.log('scissors if') || number === 2) choice = "scissors";
//     console.log(choice)
//     return choice;
// }

// variables: type variableName = value;
// let myAge = 17
// const count = 1
// use "const" when you can, use "let" when you have to

// functions: function functionName(parameter1, parameter2, parameter3) {
    //code to executed
//  }
// function parameters are the names listed in the function definition, function arguments are the real values passed to (and recieved 
// by the function.