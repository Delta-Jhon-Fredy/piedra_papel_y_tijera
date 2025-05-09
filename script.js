function getComputerChoice () {

  const randomNumber = (min , max) => Math.floor(Math.random() * (max - min + 1) + min);
    let choiceComputer = randomNumber(1 , 3);

  if (choiceComputer === 1) {

     return "rock";

  } else if (choiceComputer === 2){

      return "paper"

  } else if (choiceComputer === 3) {

      return "scissors";

  }    

  return randomNumber(1 , 3)

}

function getHumanChoice (){
  let humanChoice = prompt("Choose between: 'rock', 'paper' y 'scissors'");
  return humanChoice;
}
    
  let userScore = 0;
      let computerScore = 0;

 console.log("Game: Rock, paper and scissors")
      console.log("-°--°--°--°--°-")

function playRound (humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
      computerChoice = computerChoice.toLowerCase();
      console.log(`The user choice is: ${humanChoice}`);
      console.log(`The computer choice is: ${computerChoice}`);

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "Scissors" && computerChoice === "paper")
      ){
      
        console.log("Human win this round");
          userScore++;
  
    }else if(
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper")
      ){
  
        console.log("the computer win this round");
          computerScore++;
  
    }else {

      console.log("This round ends in a draw");

    }

      console.log(`User score: ${userScore}`);
        console.log(`Computer score: ${computerScore}`);
          console.log("----------")
}

function playGame () {
  for (let i = 0; i < 5; i++){
    console.log(`Round number: ${i + 1}`);
     let humanChoice = getHumanChoice();
       let computerChoice = getComputerChoice();
          playRound(humanChoice , computerChoice);
  } 

  if (userScore > computerScore){

    console.log("USER WIN THIS GAME.");

  }else if (computerScore > userScore){

    console.log("THE COMPUTER WIN THIS GAME.");

  }else {

    console.log("DRAW .");

  }
}


playGame()