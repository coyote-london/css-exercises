//Declare game function that starts game loop for i=5
function game() {
    let playing = true;
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore <= 2 && computerScore <= 2) {
        let moves = ['rock', 'paper', 'scissors'];
        let computerChoice = (Math.floor(Math.random() * 3));
        function roundWon(x, y) {
            alert('Round won! You played ' + x + ' while the computer played ' + y + '!');
            alert('Player has won ' + (playerScore + 1) + ' rounds while the computer has won ' + computerScore);
            if (playerScore >= 2) {
                alert('You win this game!');
            }

        }
        function roundLost(x, y) {
            alert('Round lost! You played ' + x + ' while the computer played ' + y + '!');
            alert('Player has won ' + playerScore + ' rounds while the computer has won ' + (computerScore + 1));
            if (computerScore >= 2) {
                alert('You lost this game!');
            }
        }
        function roundDraw(x, y) {
            alert('This round is a draw! You played ' + x + ' while the computer played ' + y + '!');
            alert('Player has won ' + playerScore + ' rounds while the computer has won ' + computerScore);
        }

        alert('Rock, Paper, Scissors! You know what to do, what\'s you\'re move?');
        let playerInput = window.prompt('Enter your move: ');
        let playerMove = playerInput.toLowerCase();
        let computerMove = moves[computerChoice];
        
        if (playerMove==computerMove) {
            roundDraw(playerMove, computerMove);
        }
        else if (playerMove == moves[0] && computerMove == moves[2]) {
            roundWon(playerMove, computerMove);
            playerScore = playerScore + 1;
        }
        else if (playerMove == moves[0] && computerMove == moves[1]) {
            roundLost(playerMove, computerMove);
            computerScore = computerScore + 1;
        }
        else if (playerMove == moves[1] && computerMove == moves[0]) {
            roundWon(playerMove, computerMove);
            playerScore = playerScore + 1;
        }
        else if (playerMove == moves[1] && computerMove == moves[2]) {
            roundLost(playerMove, computerMove);
            computerScore = computerScore + 1;
        }
        else if (playerMove == moves[2] && computerMove == moves[0]) {
            roundLost(playerMove, computerMove);
            computerScore = computerScore + 1;
        }
        else if (playerMove == moves[2] && computerMove == moves[1]) {
            roundWon(playerMove, computerMove);
            playerScore = playerScore + 1;
        }
        else if (!moves.includes(playerMove)) {
            alert('Not a move! Check your spelling?');
        }
     
    //Declare variable to store player's move
    //Declare variable to store player's score
    //Declare variable to store computer's move
    //Declare variable to store computer's score
    //Declare array holding game moves
    //log message to console listing choices and asking for players input
    //Have computer's move be choosen by a random  index number from move array
    // log both moves
    //if computer wins
        //add 1 to computer's score
        //log "Round lost!"
        //if score > 2
            // log "You lost!"
            //i = 5

    //else if player wins
        //add 1 to player's score
        //log "Round won!"
        // if score > 2
            //log "You win!"
            //i = 5 
    //else
        //i = i -1

    }
    



}
    