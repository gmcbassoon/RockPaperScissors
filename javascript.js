const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const paraAnnouncement = document.querySelector('#paraAnnoucement');
const paraWinner = document.querySelector('#paraWinner');
const humanScoreDiv = document.querySelector('#humanScore');
const computerScoreDiv = document.querySelector('#computerScore');
const end = document.body.appendChild(document.createElement("p"));
end.classList.add("end");

let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
let maxScore = 5;

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
    if (humanScore === maxScore || computerScore === maxScore) {
        return true;
    }
}
function announcement() {
    if (humanScore == computerScore) {
        paraWinner.textContent = (`You have the same amount of points! ${humanScore}`);
    } else  if (humanScore > computerScore) {
        paraWinner.textContent = (`You have ${humanScore - computerScore} more points than the stinky loser!`);
    } else if (humanScore < computerScore) {
        paraWinner.textContent = (`The computer is beating you by ${computerScore - humanScore} points!`);
    }
}
//Comparison of Answers
function compareAnswer(humanAnswer, computerAnswer) {
    end.textContent = '';
    // round++;
    if (humanAnswer === computerAnswer) {
        paraAnnouncement.textContent = ("It's a tie, nobody wins! Next round?");
        tieCounter++;
        console.log(humanScore, computerScore);
        announcement();
    } else {
        if (humanAnswer === "rock" && computerAnswer === "scissors") {
            paraAnnouncement.textContent = (`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            console.log(humanScore, computerScore);
            announcement();
            
        } else if (humanAnswer === "scissors" && computerAnswer === "rock") {
            paraAnnouncement.textContent = (`Computer Wins! Computer played ${computerAnswer}, next round?`);
            computerScore++;
            console.log(humanScore, computerScore);
            announcement();
            
        } else if (humanAnswer === "paper" && computerAnswer === "rock") {
            paraAnnouncement.textContent = (`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            console.log(humanScore, computerScore);
            announcement();
            
        } else if (humanAnswer === "rock" && computerAnswer === "paper") {
            paraAnnouncement.textContent = (`Computer Wins! Computer played ${computerAnswer}, next round?`);
            computerScore++;
            console.log(humanScore, computerScore);
            announcement();
            
        } else if (humanAnswer === "scissors" && computerAnswer === "paper") {
            paraAnnouncement.textContent = (`Human Wins! Computer played ${computerAnswer}, next round?`);
            humanScore++;
            console.log(humanScore, computerScore);
            announcement();
            
        } else if (humanAnswer === "paper" && computerAnswer === "scissors") {
            paraAnnouncement.textContent = (`Computer Wins! Computer played ${computerAnswer}, next round?`);
            computerScore++;
            console.log(humanScore, computerScore);
            announcement();
            
        }
        
    }
    if (fivePoints()) {
        
        if (humanScore > computerScore) {
            end.textContent = "You have won! Congratulations!";
        } else if (humanScore < computerScore) {
            end.textContent = "Unfortunately the computer won, pick better next time";
        } else {
            end.textContent = "This is literally impossbile, but good job!";
        }
        humanScore = 0;
        computerScore = 0;
    }
}
    
rock.addEventListener('click', () => {compareAnswer("rock", convertComputerAnswer())});
paper.addEventListener("click", () => {compareAnswer("paper", convertComputerAnswer())});
scissors.addEventListener("click", () => {compareAnswer("scissors", convertComputerAnswer())});

