{
  let playerScore = 0,
    computerScore = 0;

  const playGame = function (playerInput) {

    const getMoveName = function(argMoveId) {
      if (argMoveId == 1) return 'kamień';
      else if (argMoveId == 2) return 'papier';
      else if (argMoveId == 3) return 'nożyce';
    }

    //console.log(getMoveName(playerInput));

    const displayResult = function(argComputerMove, argPlayerMove) {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
      (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') ||
      (argComputerMove === 'papier' && argPlayerMove === 'nożyce')) {
        playerScore = playerScore + 1;
        return 'Ty wygrywasz!!';
      } else if (argComputerMove == argPlayerMove) return 'Remis!';
      else {
        computerScore = computerScore + 1;
        return 'Wygrał komputer!';
      }
    }

  /* Proces gry */

  clearMessages();

  //let randomNumber = Math.floor(Math.random() * 3 + 1);

  let randomNumber = Math.random()
  //console.log(Math.random());
    if (Math.random() < 0.12) {
    //console.log('<12');
      randomNumber = 1
  } else if (Math.random() <= 0.24) {
    //console.log('<24');
      randomNumber = 2
  } else {
    randomNumber = 3
    //console.log('>24');
    }

    const computerMove = getMoveName(randomNumber),
    playerMove = getMoveName(playerInput);
    printMessage(displayResult(computerMove, playerMove));
    //inny kolor wyniku np. document.getElementById('scorebox').innerHTML = displayResult(computerMove, playerMove);
    document.getElementById('player').innerHTML = playerScore;
    document.getElementById('computer').innerHTML = computerScore;
    //console.log(displayResult(computerMove, playerMove));
    //console.log(computerMove);
  }

  // for(let i = 0; i < 250; i++ ){
  //   playGame(1)
  // }

  const reset = function() {
  document.getElementById('messages').innerHTML = 'Kliknij przycisk';
  playerScore = 0; //,?
  computerScore = 0;
  document.getElementById('player').innerHTML = playerScore;
  document.getElementById('computer').innerHTML = computerScore;

  }

  document.getElementById('reset-btn').addEventListener('click', function() { reset(); });
  document.getElementById('play-rock').addEventListener('click', function() { playGame(1); });
  document.getElementById('play-paper').addEventListener('click', function() { playGame(2); });
  document.getElementById('play-scissors').addEventListener('click', function() { playGame(3); });
}
