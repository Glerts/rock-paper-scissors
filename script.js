function computerPlay(){
    const wepons = ["rock","paper","scissors"];
    return wepons[Math.floor(Math.random() * wepons.length)];
}



function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        return "You Lose! Paper beats Rock";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        return "You Win! Rock beats Scissors";
    }else if(playerSelection == "rock" && computerSelection == "rock"){
        return "It is draw!";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        return "You Win! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        return "It is draw!";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        return "You Lose! Rock beats Scissors";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        return "You Win! Scissors beats Paper";
    }else(playerSelection == "scissors" && computerSelection == "scissors");
        return "It is draw!";
    }

var computerScore = 0;
var playerScore = 0;

function game(){
    while(computerScore < 5  && playerScore < 5){
        var playerSelection = prompt("Choice your wepon = Rock Paper Scissors").toLowerCase();
        var computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
    if(computerScore == 5){
        return "Computer Win!";
    }else{
        return "You Win!";
    }
}

console.log(game());



