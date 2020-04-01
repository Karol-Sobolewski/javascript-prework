function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }else if(argMoveId == 2){
    return 'papier';
  }else if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień'
} else if(randomNumber == 2) {
  computerMove = 'papier'
} else if(randomNumber == 3) {
  computerMove = 'nożyce'
}
*/
printMessage('Komputer wybrał: ' + computerMove);

let playerInput = prompt ('Wybierz swój ruch -> 1. kamień, 2. papier, 3. nożyce');

let playerMove =  getMoveName(playerInput);
/*
if(playerInput == 1){
  playerMove = 'kamień'
} else if(playerInput == 2) {
  playerMove = 'papier'
} else if(playerInput == 3) {
  playerMove = 'nożyce'
}
*/
printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
console.log('wywołano displayResult')
console.log('argumenty: ' + argComputerMove + ', ' + argPlayerMove);
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  //printMessage('Ty wygrywasz!');
  return 'Ty wygrywasz!!'
} else if(argComputerMove == 'papier' && argPlayerMove == 'papier') {
  //printMessage('Remis!');
  return 'Remis!'
} else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  //printMessage('Wygrał komputer!');
  return 'Wygrał komputer!'
} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  //printMessage('Ty wygrywasz!');
  return 'Ty wygrywasz!!'
} else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
  //printMessage('Remis!');
  return 'Remis!'
} else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  //printMessage('Wygrał komputer!');
  return 'Wygrał komputer!'
} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
  //printMessage('Ty wygrałeś!');
  return 'Ty wygrywasz!!'
} else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
  //printMessage('Remis!');
  return 'Remis!'
} else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  //console.log (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') //true
  //printMessage('Wygrał komputer!');
  return 'Wygrał komputer!'
} else {
  //printMessage('nieznany ruch');
  return 'nieznany ruch'
}
//console.log('moves:', argComputerMove, argPlayerMove);
}
let displayResultVariable = displayResult (computerMove, playerMove);
  printMessage(displayResultVariable);

//console.log(getMoveName('2'));
