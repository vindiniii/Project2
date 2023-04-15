const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");

const output = document.querySelector("#result");
const win = document.querySelector("#wins");
const tie = document.querySelector("#ties");
const loss = document.querySelector("#losses");

/* userChoice variable holds integer values 0-2
 * 0 = rock
 * 1 = paper
 * 2 = scissors
*/
let userChoice;
let result = "";

let TIES = 0;
let WINS = 0;
let LOSSES = 0;


rockButton.addEventListener('click', function() {
    userChoice = 0;
    findResult(userChoice);

})

paperButton.addEventListener('click', function() {
    userChoice = 1;
    findResult(userChoice);

})

scissorButton.addEventListener('click', function() {
    userChoice = 2;
    findResult(userChoice);

})

function findResult(player) {

    //Computer choice: selects number 0-2
    let computer = Math.floor(Math.random() * 3);

    //assign numbers to selection for output purposes
    let user1 = "scissors";
    let comp1 = "scissors";
    if(player == 0) {
        user1 = "rock";
    } else if (player == 1) {
        user1 = "paper";
    }
    if(computer == 0) {
        comp1 = "rock";
    } else if (computer == 1) {
        comp1 = "paper";
    }



    //compare choices and set output
    if (computer == player){
        TIES++;
        result = "It's a tie!";
    } else if (player == 0 && computer == 2 || player == 2 && computer == 1 || player == 1 && computer == 0) {
        WINS++;
        result = "You win :D You picked " + user1 + " which beats " + comp1 + "!";
    } else {
        LOSSES++;
        result = "You lost D: The computer picked " + comp1 + " which beats " + user1 + "!";
    }

    //output result
    output.textContent = result;
    win.textContent = "Wins: " + WINS;
    tie.textContent = "Ties: " + TIES;
    loss.textContent = "Losses: " + LOSSES;
}






