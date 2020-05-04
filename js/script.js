function playGame(argPlayerInput){
    
    clearMessages();{
        document.getElementById('buttons');
    }
    clearMessagesRed();{
        document.getElementById('buttons');
    }
    
    clearMessagesGreen();{
        document.getElementById('buttons');
    }
    clearMessagesWin();{
        document.getElementById('buttons');
    }
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    function getMoveName(argComputerMove){
        if(argComputerMove == 1){
        return 'kamień';
        } 
        if(argComputerMove == 2){
        return 'papier';
        } 
        if(argComputerMove == 3){
        return 'nożyce';
        } else {
        printMessage('Nie znam ruchu o id ' + argComputerMove + '.');
        return 'nieznany ruch';
        }
    }
    
    console.log('Gracz wpisał: ' + argPlayerInput);

    let argPlayerMove = getMoveName(argPlayerInput);

    function getMoveName(argPlayerMove){
        if(argPlayerMove == 1){
            return 'kamień';
        }
        if(argPlayerMove == 2){
            return 'papier';
        }
        if(argPlayerMove == 3){
            return 'nożyce';
        } else {
            printMessageRed('Nie znam ruchu o id ' + argPlayerMove + '.');
            return 'nieznany ruch';
        }
    }
        
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove);
        printMessageGreen(' a Ty ' + argPlayerMove);
        if (( argComputerMove == 'kamień' && argPlayerMove == 'papier')
            || ( argComputerMove == 'papier' && argPlayerMove == 'nożyce')
            || ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
            printMessageWin('Ty wygrywasz!');
        } else if ( argComputerMove == argPlayerMove){
            printMessageRed('Remis');
        } else {
            printMessageRed('Tym razem przegrywasz :(');
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

