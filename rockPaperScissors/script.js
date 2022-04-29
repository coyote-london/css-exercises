//Variables needed
let playerScore = 0;
let computerScore = 0;
let choice = 0
let moves = ['rock', 'paper', 'scissors'];
let playerMove = '';
let computerMove = '';
const rockImage = document.createElement('img');
rockImage.src = 'rock-zoltan-tasi-unsplash.jpg';
const paperImage = document.createElement('img');
paperImage.src = 'paper-sj-objio-unsplash.jpg';
const scissorImage = document.createElement('img');
scissorImage.src = 'scissors-aleksandar-zivkovic-unsplash.jpg'; 
let textDisplay = document.getElementById('textDisplay');
let scoreBoard = document.getElementById('scoreBoard');
//Functions for getting moves


function computerInput() {
    computerMove = (Math.floor(Math.random() * 100));
    if (computerMove <= 33) {
        computerMove = 'rock';
    }
    else if (computerMove < 66) {
        computerMove = 'paper';
    }
    else if (computerMove < 101) {
        computerMove = 'scissors';
    }
}
    
function moveChoosen() {
    
    if (playerMove == computerMove) {
        roundDraw(playerMove, computerMove);
        console.log(playerMove);
    }
    else if (playerMove == 'rock') {
        if (computerMove == 'paper') {
            roundLost(playerMove, computerMove);
        }
        else if (computerMove == 'scissors') {
            roundWon(playerMove, computerMove)
        }
    
    }
    else if (playerMove == 'paper') {
        if (computerMove == 'scissors') {
            roundLost(playerMove, computerMove);
        }
        else if (computerMove == 'rock') {
            roundWon(playerMove, computerMove);
        }
    }
    else if (playerMove == 'scissors') {
        if (computerMove == 'rock') {
            roundLost(playerMove, computerMove);
        }
        else if (computerMove == 'paper') {
            roundWon(playerMove, computerMove);
        }
    }
}


function chooseMove(e) {
    scoreBoard.textContent = scoreBoard.textContent.replace(scoreBoard.textContent,
        'YOUR SCORE: ' + playerScore + ' COMPUTER\'S SCORE: ' + computerScore);   
    if (e.keyCode == '37') {
        choice = choice - 1;
        if (choice < 0) {
            choice = 2;
        }
        playerMove = moves[choice];
        computerInput();
        return moveImageCarousel();
    }
    else if (e.keyCode == '39') {
        choice = choice + 1;
        if (choice > 2) {
            choice = 0;
        }
        playerMove = moves[choice];
        computerInput();
        return moveImageCarousel();
    }
    else if ((e.keyCode == '32') || (e.keyCode == '13')) {
        return moveChoosen();
    }
}

function moveImageCarousel() {
    let spacer = document.getElementById('spacer');
    let moveImg = document.getElementById('moveImage');
    if (playerMove == 'rock') {
        textDisplay.textContent = textDisplay.textContent.replace(textDisplay.textContent, 
            'PRESS ENTER TO PLAY ROCK');
        spacer.removeChild(moveImg);
        spacer.appendChild(rockImage).setAttribute('id', 'moveImage');
        return;
    }
    else if (playerMove == 'paper') {
        textDisplay.textContent = textDisplay.textContent.replace(textDisplay.textContent, 
            'PRESS ENTER TO PLAY PAPER');
        spacer.removeChild(moveImg);
        spacer.appendChild(paperImage).setAttribute('id', 'moveImage');
        return;
    }
    else if (playerMove == 'scissors') {
        textDisplay.textContent = textDisplay.textContent.replace(textDisplay.textContent, 
            'PRESS ENTER TO PLAY SCISSORS');
        spacer.removeChild(moveImg);
        spacer.appendChild(scissorImage).setAttribute('id', 'moveImage');
        return;
    }
}


//Functions for tracking score


function roundWon(yourMove, theirMove) {
    playerScore = playerScore + 1;
    textDisplay.textContent = textDisplay.textContent.replace(textDisplay.textContent, 
        'Round won! You played ' + yourMove + ' while the computer played ' + theirMove + '!');
    if (playerScore > 3) {
        textDisplay.textContent = textDisplay.textContent.replace(textDisplay.textContent, 'You won the whole game!')
        reset();
    }
}

function roundLost(yourMove, theirMove) {
    computerScore = computerScore + 1;
    textDisplay.textContent = textDisplay.textContent.replace(textDisplay.textContent, 
        'Round lost! You played ' + yourMove + ' while the computer played ' + theirMove + '!');
    scoreBoard.textContent = scoreBoard.textContent.replace(scoreBoard.textContent,
        'Your Score: ' + playerScore + ' Computer\'s Score: ' + computerScore);   
    if (computerScore > 3) {
        textDisplay.textContent = textDisplay.textContent.replace(textDisplay.textContent, 'The computer won the whole game!')
        reset();
    }
}

function roundDraw(yourMove, theirMove) {
    textDisplay.textContent = textDisplay.textContent.replace(textDisplay.textContent, 
        'This round is a draw! You played ' + yourMove + ' while the computer played ' + 
        theirMove + '!');
    console.log('This round is a draw! You played ' + yourMove + ' while the computer played ' + theirMove + '!');
    console.log('Player has won ' + playerScore + ' rounds while the computer has won ' + computerScore);
}

//Functions for setting game states



function reset() {
    console.log('Score reset! Pick your move and shoot to play again!');
    playerScore = 0;
    computerScore = 0;
}
 
//Gameloop
const showButton = document.querySelector('.buttonShow');
window.addEventListener('keydown', game);



function game() {
    window.removeEventListener('keydown', game);
    console.log('Rock, Paper, Scissors! You know what to do, what\'s you\'re move?');
    window.addEventListener('keydown', chooseMove);
    showButton.addEventListener('click', moveChoosen);

    //HAVE START BUTTON DISPLAY WHAT CONSOLE LOGS ARE SAYING
    //CHANGE BORDER WHEN SELECTING MOVE BUTTONS
    //SHOW PICTURE OF WHAT YOU'RE SELECTING AND OUTCOME
}
    