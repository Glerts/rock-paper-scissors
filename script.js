var playerScore = 0;
var computerScore = 0;
var playerSelection;

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


document.getElementById("rock").addEventListener("click", function(){
    playerSelection = "rock";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection))});

document.getElementById("paper").addEventListener("click", function(){
    playerSelection = "paper";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection))});

document.getElementById("scissor").addEventListener("click", function(){
    playerSelection = "scissors";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection))});
        

if(computerScore == 5){
    console.log("Computer Win!") ;
}else if(playerSelection == 5){
    console.log("You Win!");}
