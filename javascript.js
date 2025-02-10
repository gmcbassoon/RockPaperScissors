// Create computerAnswer
let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
let numOfRounds = prompt("How many rounds would you like?");
numOfRounds = parseInt(numOfRounds);
for (let i = 1 ; i <= numOfRounds ; i++) {
function getComputerAnswer(max) {
    return Math.floor(Math.random() * max);
    
    }

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
//Comparison of Answers
function compareAnswer() {
    if (humanAnswer === computerAnswer) {
        alert("It's a tie, nobody wins! Next round?");
        tieCounter++;
    } else {
        if (humanAnswer === "rock" && computerAnswer === "scissors") {
            alert(`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            
        } else if (humanAnswer === "scissors" && computerAnswer === "rock") {
            alert(`Computer Wins! Computer played ${computerAnswer}, next round?`);
            computerScore++;
            
        } else if (humanAnswer === "paper" && computerAnswer === "rock") {
            alert(`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            
        } else if (humanAnswer === "rock" && computerAnswer === "paper") {
            alert(`Computer Wins! Computer played ${computerAnswer}, next round?`)
            computerScore++;
            
        } else if (humanAnswer === "scissors" && computerAnswer === "paper") {
            alert(`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            
        } else if (humanAnswer === "paper" && computerAnswer === "scissors") {
            alert(`Computer Wins! Computer played ${computerAnswer}, next round?`)
            computerScore++;
            
        }
    }
    
    return;
    
}

compareAnswer();
}
//Declaring the score at the end
if (humanScore === computerScore) {
    alert(`It's a tie with ${humanScore} point\(s)! Reload the page to try again.`);
} else if (humanScore > computerScore) {
    alert(`Human wins with ${humanScore} point\(s)! Computer had a measly ${computerScore} point\(s). There were ${tieCounter} ties!`);
} else {
    alert(`Computer wins with ${computerScore} point\(s)! Human had a measly ${humanScore} point\(s) There were ${tieCounter} ties!`);
}