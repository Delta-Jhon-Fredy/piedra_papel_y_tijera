// v1-1 - Elección máquina.

function getComputerChoice (min , max) {

  return Math.floor(Math.random() * (max - min + 1) + min);

}


function rangeConvert (num) {

if (num === 1) {

   return "piedra";

} else if (num === 2){

    return "papel"

} else if (num === 3) {

    return "tijera";

}    

}

let computerChoice = rangeConvert(getComputerChoice(1 , 3));

console.log(`La Máquina ha elegido: ${computerChoice}`);

// v2-1 - eleccón humana.

let humanChoice = prompt(`Elige entre: "Piedra", "Papel" y "Tijera".`);


// v3-1 - Ronda.

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

  if (
    (humanChoice === "piedra" && computerChoice === "tijera") ||
    (humanChoice === "papel" && computerChoice === "piedra") ||
    (humanChoice === "tijera" && computerChoice === "papel")
    ){

    return "Has ganado";

  }else if(
    (computerChoice === "piedra" && humanChoice === "tijera") ||
    (computerChoice === "papel" && humanChoice === "piedra") ||
    (computerChoice === "tijera" && humanChoice === "papel")
    ){

    return "Has perdido";

  } else {

    return "Empate";

  }

}

console.log(playRound(humanChoice, computerChoice));
