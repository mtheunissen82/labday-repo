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
    fillFirstLetter(round);
}

function fillFirstLetter(round) {
    let firstCell = document.querySelector('.cell--first');
    firstCell.innerHTML = round.word.charAt(0);
}

function guessButtonHandler() {
    let guessInputElement = document.getElementById('guess-input');
    let guessWord = guessInputElement.value;

    let guessResult = lingoGame.currentRound.guess(guessWord);
    fillGridRow(guessResult);
}

function fillGridRow(guessResult) {
    let rowClass = `grid__row--${indexToString(currentGridRowIndex)}`;
    let rowElement = document.getElementsByClassName(rowClass)[0];

    if (!rowElement) {
        throw new Error(`Unable to find row element for class '${rowClass}'`);
    }

    for (let i = 0; i < guessResult.result.length; i++) {
        let cellElement = rowElement.children[i];
        cellElement.innerHTML = guessResult.result[i].letter;
        cellElement.classList.add(`cell--${guessResult.result[i].result.toLowerCase()}ed`);
    }
    
    currentGridRowIndex++;
}

function indexToString(index) {
    if (index === 0) { return 'first'; }
    if (index === 1) { return 'second'; }
    if (index === 2) { return 'third'; }
    if (index === 3) { return 'fourth'; }
    if (index === 4) { return 'fifth'; }
    if (index === 5) { return 'sixth'; }
    if (index === 6) { return 'seventh'; }
    if (index === 7) { return 'eighth'; }
    if (index === 8) { return 'ninth'; }
    if (index === 9) { return 'tenth'; }
}
