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
        document.getElementById("score").innerHTML = "YOU WIN THE GAME!";
        disable();
       }else if(computerScore == 5){
        document.getElementById("score").innerHTML = "YOU LOSE! COMPUTER BEAT YOU!";
        disable();
    }else{
        return
    }
}

function computerPlay(){

    //For computer chose randomly

    const wepons = ["rock","paper","scissors"];
    var wepon = wepons[Math.floor(Math.random() * wepons.length)];
    if(wepon == "rock"){
        document.getElementById("computer-img").src="img/rock-icon-grey.png"
    }
    else if(wepon == "paper"){
        document.getElementById("computer-img").src="img/paper-icon-grey.png"
    }
    else if(wepon == "scissors"){
        document.getElementById("computer-img").src="img/scissors-icon-grey.png"
    }
    return wepon;

}



function playRound(playerSelection, computerSelection){

    //Game mechanics
    
    if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        document.getElementById("score").innerHTML = "You Lose! Paper beats Rock";
        return 
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        document.getElementById("score").innerHTML = "You Win! Rock beats Scissors";
        return 
    }else if(playerSelection == "rock" && computerSelection == "rock"){
        document.getElementById("score").innerHTML = "It is draw!";  
        return   
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        document.getElementById("score").innerHTML = "You Lose! Scissors beats Paper";
        return 
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        document.getElementById("score").innerHTML = "You Win! Paper beats Rock";
        return 
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        document.getElementById("score").innerHTML = "It is draw!";
        return 
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        document.getElementById("score").innerHTML = "You Lose! Rock beats Scissors";
        return 
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        document.getElementById("score").innerHTML = "You Win! Scissors beats Paper";
        return 
    }else(playerSelection == "scissors" && computerSelection == "scissors");
        document.getElementById("score").innerHTML = "It is draw!";
        return
    }

//Buttons coding

document.getElementById("rock").addEventListener("click", function(){
    playerSelection = "rock";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("player-img").src="img/rock-icon-grey.png"
    document.getElementById("computer").innerHTML = computerScore;
    winner(playerScore,computerScore);
});
    

document.getElementById("paper").addEventListener("click", function(){
    playerSelection = "paper";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection))
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("player-img").src="img/paper-icon-grey.png"
    document.getElementById("computer").innerHTML = computerScore;
    winner(playerScore,computerScore);
});

document.getElementById("scissor").addEventListener("click", function(){
    playerSelection = "scissors";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("player-img").src="img/scissors-icon-grey.png"
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
    document.getElementById("player-img").src=""
    document.getElementById("computer-img").src=""
    newGame.disabled = true;
    console.clear();
})
        
