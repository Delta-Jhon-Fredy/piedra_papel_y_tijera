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