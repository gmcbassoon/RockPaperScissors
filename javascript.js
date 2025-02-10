// Create computerAnswer
let humanScore = 0;
let computerScore = 0;
const numOfRounds = 5;
for (let i = 1 ; i <= numOfRounds ; i++) {
function getComputerAnswer(max) {
    return Math.floor(Math.random() * max);
    
    }
let humanScore = 0;
let computerScore = 0;
let computerAnswer = (getComputerAnswer(3) + 1);

if (computerAnswer === 1) {
    computerAnswer = "rock";
} else if(computerAnswer === 2) {
    computerAnswer = "paper";
} else if(computerAnswer === 3) {
    computerAnswer = "scissors";
} else {
    computerAnswer = "My Shit Broke, please fix";
}

console.log(computerAnswer);
// Create humanAnswer
getHumanAnswer(prompt("I ask you this, shall you defend with Rock, Paper, or Scissors?"))
function getHumanAnswer(prompt) {
    humanAnswer = prompt.toLowerCase();
}

if (humanAnswer === "rock" || "paper" || "scissors") {

} else {
    alert("Not a valid answer, please try again")
}
console.log(humanAnswer);

function compareAnswer() {
    if (humanAnswer === computerAnswer) {
        prompt("It's a tie, nobody wins!");
        
    } else {
        if (humanAnswer === "rock" && computerAnswer === "scissors") {
            prompt(`Human Wins! Computer played ${computerAnswer}, Redo?`);
            humanScore++;
            
        } else if (humanAnswer === "scissors" && computerAnswer === "rock") {
            prompt(`Computer Wins! Computer played ${computerAnswer}, Redo?`);
            computerScore++;
            
        } else if (humanAnswer === "paper" && computerAnswer === "rock") {
            prompt(`Human Wins! Computer played ${computerAnswer}, Redo?`);
            humanScore++;
            
        } else if (humanAnswer === "rock" && computerAnswer === "paper") {
            prompt(`Computer Wins! Computer played ${computerAnswer}, Redo?`)
            computerScore++;
            
        } else if (humanAnswer === "scissors" && computerAnswer === "paper") {
            prompt(`Human Wins! Computer played ${computerAnswer}, Redo?`);
            humanScore++;
            
        } else if (humanAnswer === "paper" && computerAnswer === "scissors") {
            prompt(`Computer Wins! Computer played ${computerAnswer}, Redo?`)
            computerScore++;
            
        }
    }
    return;
}
}
compareAnswer();
console.log(humanScore);
console.log(computerScore);

function scoreTracker() {

}
