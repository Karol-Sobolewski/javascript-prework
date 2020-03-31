let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień'
} else if(randomNumber == 2) {
  computerMove = 'papier'
} else if(randomNumber == 3) {
  computerMove = 'nożyce'
}

printMessage('Komputer wybrał: ' + computerMove);

let playerInput = prompt ('Wybierz swój ruch -> 1. kamień, 2. papier, 3. nożyce');

let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień'
} else if(playerInput == 2) {
  playerMove = 'papier'
} else if(playerInput == 3) {
  playerMove = 'nożyce'
}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'papier') {
  printMessage('Remis!');
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Wygrał komputer!');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'kamień' && playerMove == 'kamień') {
  printMessage('Remis!');
} else if(computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Wygrał komputer!');
} else if(computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrałeś!');
} else if(computerMove == 'nożyce' && playerMove == 'nożyce') {
  printMessage('Remis!');
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Wygrał komputer!');
} else {
  printMessage('nieznany ruch');
}
