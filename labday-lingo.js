const words = [
'linux',
'mouse',
'timer',
'basic',
];

let lingoGame;
let currentGridRowIndex = 0;

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
}

function guessButtonHandler() {
    let guessInputElement = document.getElementById('guess-input');
    let guessWord = guessInputElement.value;

    let guessResult = lingoGame.currentRound.guess(guessWord);
    fillGridRow(guessResult);
}

function fillGridRow(guessResult) {
    let rowIndexString = indexToString(currentGridRowIndex);
    let rowClass = `grid__row--${rowIndexString}`;

    let rowElement = document.getElementsByClassName(rowClass);
    console.log(rowElement);
    console.log(guessResult);

    for (let i = 0; )
    
    currentGridRowIndex++;
}

function indexToString(index) {
    if (index === 0) { return 'first'; }
    if (index === 1) { return 'second'; }
    if (index === 2) { return 'third'; }
    if (index === 3) { return 'fourth'; }
    if (index === 4) { return 'fifth'; }
}
