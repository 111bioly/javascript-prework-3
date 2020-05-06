{const playGame = function(argPlayerInput){
    clearMessagesAll();

    const getMoveName = function (randomNumber){
        if(randomNumber == 1){
        return 'kamień';
        } 
        if(randomNumber == 2){
        return 'papier';
        } 
        if(randomNumber == 3){
        return 'nożyce';
        } else {
        colorMessages('Nie znam ruchu o id ' + randomNumber + '.', 'blue');
        return 'nieznany ruch';
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const argComputerMove =  getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + argPlayerInput);
    const argPlayerMove = getMoveName(argPlayerInput)
    
    const displayResult = function(argComputerMove, argPlayerMove){
        colorMessages('Zagrałem ' + argComputerMove, 'blue');
        colorMessages(' a Ty ' + argPlayerMove, 'green');
        if (( argComputerMove == 'kamień' && argPlayerMove == 'papier')
            || ( argComputerMove == 'papier' && argPlayerMove == 'nożyce')
            || ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
                colorMessages('Ty wygrywasz!', 'win');
        } else if ( argComputerMove == argPlayerMove){
            colorMessages('Remis', 'red');
        } else {
            colorMessages('Tym razem przegrywasz :(', 'red');
        }
    }
    displayResult(argComputerMove, argPlayerMove);

}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});

}