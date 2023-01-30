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

// added stuff

let ComputerWins = 0;
let PlayerWins = 0;
let rounds_played = 0;

function updateScore(ComputerWins, PlayerWins) {
    div_computer_score = document.querySelector('#computer-score');
    div_user_score = document.querySelector('#user-score');
    document.getElementById("computer-score").innerHTML = "Computer Score: " + ComputerWins;
    document.getElementById("user-score").innerHTML = "User Score: " + PlayerWins;
}

function loose_css() {
    message_board = document.getElementById('message-board');
    message_board.style.color = "white";
    message_board.style['background-color'] = "red";
}

function win_css() {
    message_board = document.getElementById('message-board');
    message_board.style.color = "white";
    message_board.style['background-color'] = "green";
}

function tie_css() {
    message_board = document.getElementById('message-board');
    message_board.style.color = "grey";
    message_board.style['background-color'] = "yellow";
}

function inputChoice(e) {
    PlayerSelection = e.srcElement.id;
    ComputerSelection = getComputerChoice();
    winner = playRound(PlayerSelection, ComputerSelection);
    message_board = document.getElementById('message-board');
    if (rounds_played < 5) {
        if (winner === 'computer') {
            document.getElementById("message-board").innerHTML = 'You lose! ' + ComputerSelection + ' beats ' + PlayerSelection;
            ++ComputerWins;
            loose_css();
        } else if (winner === 'player') {
            document.getElementById("message-board").innerHTML = 'You won! ' +  PlayerSelection + ' beats ' + ComputerSelection;
            ++PlayerWins;
            win_css();
        } else if (winner = 'no one') {
            document.getElementById("message-board").innerHTML = 'Tie!';
            tie_css();
        }
        rounds_played++;
    }
    updateScore(ComputerWins, PlayerWins);
    if (rounds_played >=5){
        const div_result = document.createElement("div");
        div_result.style['color'] = 'white';
        div_result.style.height = '400px';
        div_result.style.width = '800px';
        div_result.style["font-size"] = '64px';
        div_result.style["display"] = 'flex';
        div_result.style["justify-content"] = 'center';
        div_result.style["align-items"] = 'center';
        if (ComputerWins > PlayerWins) {
            message = 'The Computer won the Game ' + ComputerWins + ' to ' + PlayerWins;
            div_result.style['background-color'] = 'red';

        } else if (PlayerWins > ComputerWins) {
            message = 'You won the Game ' + PlayerWins + ' to ' + ComputerWins;
            div_result.style['background-color'] = 'green';
        }
        else {
            message = 'The game has tied '+ PlayerWins + ' to ' + ComputerWins;
            div_result.style['background-color'] = 'yellow';
            div_result.style['color'] = 'black';
        }
        div_result.innerHTML = message;
        // insert before here
        const game = document.getElementById("game");
        const choices = Array.from(document.querySelectorAll('.choice'));
        choices.forEach(choice => choice.remove());
        game.appendChild(div_result);
    }
}

const choices = Array.from(document.querySelectorAll('.choice'));
choices.forEach(choice => choice.addEventListener('click', inputChoice));

