const words = [
    'linux',
    'mouse',
    'timer',
    'basic',
];

let lingoGame;

/**
* Start a new single player game
*/
function startSinglePlayerGame() {
    var playerOptions = document.getElementById("player-options");
    var lingoLayout = document.getElementById("lingo__layout");
    playerOptions.style.display = "none";
    lingoLayout.style.display = "flex";

    lingoGame = new LingoGame(words);
    let round = lingoGame.start();
    fillFirstLetter(round);
}

function fillFirstLetter(round) {
    let firstCell = document.querySelector('.cell--first');
    firstCell.innerHTML = round.word.charAt(0);
}

function guessButtonHandler() {
    // fetch current guess from input field
    let guessResult = round.guess(guessWord);
    console.log(guessResult);
    // C result op grid
}