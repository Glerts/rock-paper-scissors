var playerScore = 0;
var computerScore = 0;
var playerSelection;
const buttons = document.getElementsByClassName("buttons");
const newGame = document.getElementById("newgame");
newGame.disabled = true;

function disable(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
    newGame.disabled = false;
}

function winner(playerScore, computerScore){

    //To chose for winner

    if (playerScore == 5){
        document.getElementById("score").innerHTML = "You Win!";
        disable();
       }else if(computerScore == 5){
        document.getElementById("score").innerHTML = "Computer Win!";
        disable();
    }else{
        return
    }
}

function computerPlay(){

    //For computer chose randomly

    const wepons = ["rock","paper","scissors"];
    return wepons[Math.floor(Math.random() * wepons.length)];
}

function playRound(playerSelection, computerSelection){

    //Game mechanics
    
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

//Buttons coding

document.getElementById("rock").addEventListener("click", function(){
    playerSelection = "rock";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;
    winner(playerScore,computerScore);
});
    

document.getElementById("paper").addEventListener("click", function(){
    playerSelection = "paper";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection))
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;
    winner(playerScore,computerScore);
});

document.getElementById("scissor").addEventListener("click", function(){
    playerSelection = "scissors";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;
    winner(playerScore,computerScore);
});

document.getElementById("newgame").addEventListener("click", function(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].disabled = false;
    }
    document.getElementById("player").innerHTML = playerScore = 0;
    document.getElementById("computer").innerHTML = computerScore = 0;
    document.getElementById("score").innerHTML = "";
    newGame.disabled = true;
    console.clear();
})
        
