function playGame(playerInput) {

  function getMoveName(argMoveId){

    if(argMoveId == 1) return 'kamień';
    else if(argMoveId == 2) return 'papier';
    else if(argMoveId == 3) return 'nożyce';

  }

  function displayResult(argComputerMove, argPlayerMove) {

    console.log('wywołano displayResult')
    console.log('argumenty: ' + argComputerMove + ', ' + argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if((argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
       (argComputerMove === 'nożyce' && argPlayerMove == 'kamień') ||
       (argComputerMove === 'papier' && argPlayerMove === 'nożyce')) {

      return 'Ty wygrywasz!!';

    }

    else if(argComputerMove == argPlayerMove) return 'Remis!'
    else return 'Wygrał komputer!'

  }

  /* Proces gry */

  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);

  let playerMove =  getMoveName(playerInput);

  printMessage(displayResult (computerMove, playerMove));

}

document.getElementById('play-rock').addEventListener('click', function(){ playGame(1); });
document.getElementById('play-paper').addEventListener('click', function(){ playGame(2); });
document.getElementById('play-scissors').addEventListener('click', function(){ playGame(3); });
