let computerSelection;
let playerSelection;


// 1 for rock, 2 for paper, 3 for scissor

function game(){
    function computerPlay(){
        return computerSelection = Math.floor(Math.random()*3)+1;
    }
    
    function playerPlay(){
        return playerSelection = prompt("What's your choice ? (Rock(1), Paper(2) or Scissors(3))");
    }
    
    function playRound(playerSelection,computerSelection){
        if(playerSelection == 1 && computerSelection == 3){
            console.log("You win! Rock beats Scissors");
        }
        else if(playerSelection == 1 && computerSelection == 1){
            console.log("It's draw!");
        }
        else if(playerSelection == 1 && computerSelection == 2){
            console.log("You lose! Paper beats Rock");
        }
        else if(playerSelection == 2 && computerSelection == 1){
            console.log("You win! Paper beats Rock");
        }
        else if(playerSelection == 2 && computerSelection == 2){
            console.log("It's draw!");
        }
        else if(playerSelection == 2 && computerSelection == 3){
            console.log("You lose! Scissors beats Paper");
        }
        else if(playerSelection == 3 && computerSelection == 2){
            console.log("You win! Scissors beats Paper");
        }
        else if(playerSelection == 3 && computerSelection == 3){
            console.log("It's draw!");
        }
        else{
            console.log("You lose! Rock beats Scissors");
        }
    }    
}

for(let i=1; i<6; i++){
    game();
}