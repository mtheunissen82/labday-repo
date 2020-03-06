class LingoGame {
  words = [];
  numberOfRounds = -1;
  currentRound;

  defaultRoundConfig = {
    attempts: 5
  };

  roundConfig = {};

  /**
   * Construct a Lingo game
   * @param {array} wordList A list of all allowed words for this game.
   * @param {string} numberOfRounds The number of rounds which should be played (-1 for infinity).
   * @param {object} roundConfig Object which contains round configuration.
   */
  constructor(words, numberOfRounds = -1, roundConfig) {
    this.words = words;
    this.numberOfRounds = numberOfRounds;
    this.roundConfig = roundConfig || this.defaultRoundConfig;
  }

  start() {
    this.currentRound = new Round("linux", this.roundConfig.attempts);
    return this.currentRound;
  }

  nextRound() {
    this.currentRound = new Round("linux", this.roundConfig.attempts);
    return this.currentRound;
  }

  end() {
    // implement me
  }
}

class Round {
  word;
  amountOfattempts = 5;
  currentAttempt = 0;

  constructor(word, amountOfAttempts = 5) {
    this.word = word;
    this.amountOfAttempts = amountOfAttempts;
  }

  guess(guessWord) {
    if (this.currentAttempt >= this.amountOfAttempts) {
      throw new Error('No more attempts left, round is over.');
    }

    this.currentAttempt++;

    if (guessWord.length !== this.word.length) {
      throw new Error(
        `Invalid guess word length: ${guessWord.length} should be: ${this.word.length}`
      )
    }

    let guessResult = new GuessResult();

    for (let i = 0; i < guessWord.length; i++) {
      let letter = this.word[i];
      let guessLetter = guessWord[i];

      // exact positional match
      if (letter === guessLetter) {
        guessResult.pushLetter(guessLetter, 'MATCH');
        continue;
      }

      // semi match
      if (this.word.indexOf(guessLetter) !== -1) {
        guessResult.pushLetter(guessLetter, 'SEMIMATCH');
        continue;
      }

      // fall through: no match
      guessResult.pushLetter(guessLetter, 'NOMATCH')
    }

    return guessResult;
  }
}

class GuessResult {
  result = [];

  pushLetter(letter, result) {
    this.result.push({ 'letter': letter, 'result': result });
  }

  /**
   * Check if there is a full match for this guess.
   * @returns true if there is a full match otherwise false.
   */
  fullMatch() {
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i].result !== 'MATCH') {
        return false;
      }
    }

    return true;
  }

}
