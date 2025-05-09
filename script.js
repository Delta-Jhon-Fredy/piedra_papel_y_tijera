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