const wordList = [
  'linux',
  'mouse',
  'timer',
  'basic',
];

class GuessResult {
  result = [];

  get MATCH() {
    return 1;
  }

  get NOMATCH() {
    return 2;
  }

  get SEMIMATCH() {
    return 3;
  }

  pushLetter(letter, result) {
    result.push({ 'letter': letter, 'result': result });
  }

  /**
   * Check if there is a full match for this guess.
   * @returns true if there is a full match otherwise false.
   */
  fullMatch() {
    for (i = 0; i < this.result.length; i++) {
      if (this.result[i].result !== GuessResult.MATCH) {
        return false;
      }
    }

    return true;
  }

}

class Round {
  word;
  attempts = 5;

  constructor(word, attempts = 5) {
    this.word = word;
    this.attempts = attempts;
  }

  guess(guessWord) {
    if (attempts < 1) {
      throw new Error('No more attempts left, round is over.');
    }

    this.attempts--;

    if (guessWord.length !== this.word.length) {
      throw new Error(`Invalid guess word length: ${guessWord.length} should be: ${this.word.length}`)
    }

    let guessResult = new GuessResult();

    for (i = 0; i < guessWord.length; i++) {
      let letter = this.word[i];
      let guessLetter = guessWord[i];

      // exact positional match
      if (letter === guessLetter) {
        guessResult.pushLetter(guessLetter, GuessResult.MATCH);
        continue;
      }

      // semi match
      if (this.word.indexOf(guessLetter) !== -1) {
        guessResult.pushLetter(guessLetter, GuessResult.SEMIMATCH);
        continue;
      }

      // fall through: no match
      guessResult.pushLetter(guessLetter, GuessResult.NOMATCH)
    }

    return guessResult;
  }
}

let round = new Round("linux");

try {
  let result = round.guess("xaaaa");
  console.log(result);
} catch (e) {
  console.log(e);
}
