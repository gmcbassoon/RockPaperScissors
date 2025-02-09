// Create computerAnswer
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
// Compare Answers
function compareAnswer() {
    if (humanAnswer === computerAnswer) {
        alert("It's a tie, nobody wins!");
    } else if (humanAnswer !== computerAnswer) {
        
    }
}