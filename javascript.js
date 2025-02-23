const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const paraAnnouncement = document.querySelector('#paraAnnoucement');
const paraWinner = document.querySelector('#paraWinner');

console.log(paraWinner);
let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
let numOfRounds = 5;

console.log(rock)
console.log(paper)
console.log(scissors)
//
// for (let i = 1 ; i <= numOfRounds ; i++) {
// Create computerAnswer

function getComputerAnswer(max) {
    return Math.floor(Math.random() * max);
}

function convertComputerAnswer() {
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
    return computerAnswer;
}
    
function fivePoints() {
    if (humanScore === 5 || computerScore === 5) {
        return true;
    }
}


// Create humanAnswer


// if (humanAnswer === "rock" || "paper" || "scissors") {

// } else {
//     alert("Not a valid answer, please try again");
// }
//Comparison of Answers
function compareAnswer(humanAnswer, computerAnswer) {

    // round++;
    if (humanAnswer === computerAnswer) {
        paraAnnouncement.textContent = ("It's a tie, nobody wins! Next round?");
        tieCounter++;
    } else {
        if (humanAnswer === "rock" && computerAnswer === "scissors") {
            paraAnnouncement.textContent = (`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            
        } else if (humanAnswer === "scissors" && computerAnswer === "rock") {
            paraAnnouncement.textContent = (`Computer Wins! Computer played ${computerAnswer}, next round?`);
            computerScore++;
            
        } else if (humanAnswer === "paper" && computerAnswer === "rock") {
            paraAnnouncement.textContent = (`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            
        } else if (humanAnswer === "rock" && computerAnswer === "paper") {
            paraAnnouncement.textContent = (`Computer Wins! Computer played ${computerAnswer}, next round?`);
            computerScore++;
            
        } else if (humanAnswer === "scissors" && computerAnswer === "paper") {
            paraAnnouncement.textContent = (`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            
        } else if (humanAnswer === "paper" && computerAnswer === "scissors") {
            paraAnnouncement.textContent = (`Computer Wins! Computer played ${computerAnswer}, next round?`);
            computerScore++;
            
        }
    }
    
    console.log(computerAnswer)
    console.log(humanAnswer)
    
}
rock.addEventListener('click', () => {compareAnswer("rock", convertComputerAnswer())});
paper.addEventListener("click", () => {compareAnswer("paper", convertComputerAnswer())});
scissors.addEventListener("click", () => {compareAnswer("scissors", convertComputerAnswer())});

// }
//Declaring the score at the end
if (humanScore || computerScore <= numOfRounds) {
    paraWinner.textContent = (`You have ${numOfRounds} rounds left!`);
} else {
if (humanScore === computerScore) {
    paraWinner.textContent = (`It's a tie with ${humanScore} point\(s)! Reload the page to try again.`);
} else if (humanScore > computerScore) {
    paraWinner.textContent = (`Human wins with ${humanScore} point\(s)! Computer had a measly ${computerScore} point\(s). There were ${tieCounter} ties!`);
} else {
    paraWinner.textContent = (`Computer wins with ${computerScore} point\(s)! Human had a measly ${humanScore} point\(s) There were ${tieCounter} ties!`);
}
}