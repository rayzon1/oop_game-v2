/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0; // Will keep track of the number of missed guesses.
    this.phrases = this.createPhrases(); // Phrase objects to use with the game.
    this.activePhrase = null; // Nothing will be active on start.
  }

  /**
   * This will create the phrases needed for in-game use.
   * @return {array} An array of phrases that can be used in the game.
   */
  createPhrases() {
    let phrases = [
      new Phrase("fear is the path to the dark side"),
      new Phrase("get busy living or get busy dying"),
      new Phrase("feel the force"),
      new Phrase("you must unlearn what you have learned"),
      new Phrase("do or do not there is no try")
    ];
    return phrases;
  }

  /**
   * Selects random phrase from the phrases property.
   * @return {Object} Phrase object chosen to be used.
   */
  getRandomPhrase() {
    let random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }

  /**
   * Begins game by selecting the random phrase and displaying it to
   * the user.
   */
  startGame() {
    $("#overlay").hide();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Logic and handling for user interaction with the keyboard.
   * @param {Object} Handles interaction on the provided element object.
   */
  handleInteraction(letter) {
    const phrase = new Phrase(this.activePhrase.phrase);
    if (phrase.checkLetter(letter.text())) {
      $(letter).prop("disabled", true);
      phrase.showMatchedLetter(letter.text());
      letter.addClass("chosen");
    } else {
      this.removeLife();
      letter.addClass("wrong");
      $(letter).prop("disabled", true);
    }
    if (this.checkForWin()) {
      this.gameOver(true);
    }
  }

  /**
   * Checks for winning move
   * @return {boolean} Returns true if game has been won, false if not.
   */
  checkForWin() {
    const lst = $(".hide");
    return lst.length < 1;
  }

  /**
   * Replaces liveheart pic with lostheart, indicating a lost life. If
   * all lives are lost then gameOver is called.
   */
  removeLife() {
    const hearts = $('img[src = "images/s-l300.png"]');
    const arr = [...hearts];

    let lastHeart = arr.slice(-1);

    $(lastHeart).removeAttr("src");
    $(lastHeart).attr("src", "images/lostHeart.png");
    this.missed++;
    if (this.missed == 5) {
      this.gameOver(false);
    }
  }

  gameOver(outcome) {
    if (outcome) {
      $("#overlay")
        .show()
        .toggleClass("start win");
      $("#game-over-message").text("Congratulations You Win!");
      $("#btn__reset").hide();
      $(".title").hide();
      $("#game_over_title").show();
      $(".reload")
        .show()
        .on("click", () => location.reload());
    } else {
      $("#overlay")
        .show()
        .toggleClass("start lose");
      $("#game-over-message").text("Sorry you lose...");
      $("#btn__reset").hide();
      $(".title").hide();
      $("#game_over_title").show();
      $(".reload")
        .show()
        .on("click", () => location.reload());
    }
  }
}
