function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

function getComputerChoice() {
    let number = getRandomInt(1, 4);
    let choice = 'no Choice';
    if (number === 1) {
        choice = 'rock';
    } else if (number === 2) {
        choice = 'paper';
    } else if (number === 3) {
        choice = 'scissors';
    } else {
        choice = 'problem detected :('
    }
    return choice;
}

function playRound(ComputerSelection, PlayerSelection) {
    let winner = 'not defined'
    if (ComputerSelection === 'paper' & PlayerSelection === 'rock') {
        winner = 'computer';
    } else if (ComputerSelection === 'paper' & PlayerSelection === 'scissors'){
        winner = 'player';
    } else if (ComputerSelection === 'paper' & PlayerSelection === 'paper') {
        winner = 'no one';
    } else if (ComputerSelection === 'rock' & PlayerSelection === 'rock') {
        winner = 'no one';
    } else if (ComputerSelection === 'rock' & PlayerSelection === 'paper') {
        winner = 'player';
    } else if (ComputerSelection === 'rock' & PlayerSelection === 'scissors') {
        winner = 'computer';
    } else if (ComputerSelection === 'scissors' & PlayerSelection === 'rock') {
        winner = 'player';
    } else if (ComputerSelection === 'scissors' & PlayerSelection === 'paper') {
        winner = 'computer';
    } else if (ComputerSelection === 'scissors' & PlayerSelection === 'scissors') {
        winner = 'no one'
    } else {
        winner = 'problem detected :('
    }
    return winner;
}

function InputCheck(userinput) {
    let PlayerSelection = userinput.toLowerCase();
    if (PlayerSelection === 'rock' || PlayerSelection === 'paper' || PlayerSelection === 'scissors') {
        return PlayerSelection;
    } else {
        return 'no valid choice';
    }
}

function Input() {
    let check = false;
    let input = ' x ';
    input = InputCheck(prompt('Make your coice ("rock", "paper", "scissors"):'));
    if (input !==  'no valid choice') {
        return input;
    }
    while (check === false) {
        input = InputCheck(prompt('Choice not valid! Choose "rock", "paper" or "scissors":'));
        if (input !== 'no valid choice') {
            check = true
        }
    }
    return input
}

function game(){
    let PlayerSelection = 'not definied ...';
    let ComputerSelection = 'not definied ...';
    let remainingGames;
    let ComputerWins = 0;
    let PlayerWins = 0;
    let winner = 'not definied ...';

    console.log('Start of Game')
    for (let i = 0 ; i < 5; i++ ) {
        remainingGames = 5 - i;
        console.log('Remaining games:' + remainingGames);
        PlayerSelection = Input();
        ComputerSelection = getComputerChoice();
        winner = playRound(ComputerSelection, PlayerSelection)
        if (winner === 'computer') {
            message = 'You lose! ' + ComputerSelection + ' beats ' + PlayerSelection;
            ++ComputerWins;
        } else if (winner === 'player') {
            message = 'You won! ' +  PlayerSelection + ' beats ' + ComputerSelection;
            ++PlayerWins;
        } else if (winner = 'no one') {
            message = 'Tie!';
        }
        console.log(message);
        console.log( );
        }
    if (ComputerWins > PlayerWins) {
        console.log('The Computer won the Game ' + ComputerWins + ' to ' + PlayerWins);
    } else if (PlayerWins > ComputerWins) {
        console.log('You won the Game ' + PlayerWins + ' to ' + ComputerWins)
    }
    else {
        console.log('The game has tied!')
    }
}

game()