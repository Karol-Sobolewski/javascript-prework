function playGame (playerInput) { /*deklaracja funkcji z argumentem podanym przez gracza

  -czemu ta funckja potrzebuje argumentu?
     funkcja powinna przyjmować argument 1, 2 lub 3 -> to co wybrał gracz
  -dlaczego?
      tak działa algorytm:
          zagrajmy w grę
              -co masz? -> Nic -> nie zagramy w grę musisz podać wartość dla argumentu.

            mam wartość dla argumentu
                -jaką?

            kamień -> btn click przez funkje nadaje wartość dla argumentu playerInput == 1 = 'kamień'

              -losowanie ruchu komputera ->
              -porównanie rezultatu ->
              -wyświetlanie wyniku
              koniec gry
       */

  let cleardiv = clearMessages(); /*czyszczenie po ponownym kliknięciu.

   czy Funkcja podpina tutaj się przez plik intex.html z pliku functions.js?*/

  function getMoveName(argMoveId){ //funkcja definiująca ruch i zwracająca czym jest 1 2 3
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

  let randomNumber = Math.floor(Math.random() * 3 + 1); //zmienna losująca liczbę od 1-3

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /*zmienna podaje ruch komputera ->   ¡wywołuje!   funkcję, która definiuje ruch (getMoveName) i dostaje (argument) liczbę (ze zmiennej randomNumber) i zwraca (return) nazwę ruchu
  np. getMoveName(1) -> getMoveName('kamień')*/

  printMessage('Komputer wybrał: ' + computerMove);

 let playerMove =  getMoveName(playerInput);

 /*zmienna podaje ruch gracza ->   ¡wywołuje!   funkcję, która definiuje ruch (getMoveName) i dostaje (argument) podany przez gracza (ze zmiennej playerInput)
  np. getMoveName(playerInput = playGame(1);) -> getMoveName(playerInput == 1) -> getMoveName(1) -> getMoveName('kamień')*/

/*  -czy można zrobić pc vs pc?
      tak wystarczy dać 2x getMoveName(randomNumber) i zrobić automatyczne odświeżanie (pewnie potem)*/

  function displayResult(argComputerMove, argPlayerMove) { /*Funkcja wyświetlająca wyniki + zdefiniowanie argumentów*/
    console.log('wywołano displayResult')
    console.log('argumenty: ' + argComputerMove + ', ' + argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    /*argumenty pobierą info zwócone (return) ze zmiennych computerMove i playerMove.
    Wiedzą skąd, bo poniżej jest   ¡wywołanie funkcji (displayResult) przez zmienną (displayResultVariable)!
    która to funkcja bierze zmienia/podaje wartości dla argumentów argComputerMove i argPlayerMove (ze zmiennych computerMove i playerMove)
    np. if computerMove == 'kamień''  & playerMove == 'papier'
        and displayResult('computerMove' 'playerMove')
    then -->
      if  displayResult(argComputerMove, argPlayerMove)
      then  argComputerMove == 'kamień' & argPlayerMove == 'papier' */

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      return 'Ty wygrywasz!!'
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier') {
      return 'Remis!'
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      return 'Wygrał komputer!'
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      return 'Ty wygrywasz!!'
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      return 'Remis!'
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      return 'Wygrał komputer!'
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return 'Ty wygrywasz!!'
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      return 'Remis!'
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      return 'Wygrał komputer!'
    } else {
      return 'nieznany ruch'
    }
  }
  let displayResultVariable = displayResult (computerMove, playerMove); //wywołanie funkcji displayResult opisane wyżej
    printMessage(displayResultVariable);
}


document.getElementById('play-rock').addEventListener('click', function(){

  /*pobranie elementu ze strony html z id ' ', następnie po wykryciu 'kliknięcia' wywołanie(?)/wykonanie funkcji (function)*/

  console.log('kliknięto w przycisk');

  let playerInputVariable = playGame(1);

  /*funkcja (function()) wywołuje inną funckję (playGame()) poprzez zmienną (let playerInputVariable).
  Zmienna nadaje tej drugiej funkji (playGame()) argument o wartości np. 1
  czyli zdefiniowana funkcja (playGame()) na początku pliku dostaje wartość dla argumentu (layerInput) równą np. 1

np. playGame(1) ->
 playerInputVariable = playGame(layerInput);
 layerInput == 1
  let playerMove =  getMoveName(playerInput);
   let playerMove =  getMoveName(1);
   let playerMove =  getMoveName('kamień');
  */

});
document.getElementById('play-paper').addEventListener('click', function(){
  let playerInputVariable = playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  let playerInputVariable = playGame(3);
});
