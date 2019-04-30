/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 *
 * */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   *  Display chosen random phrase on game board.
   */

  addPhraseToDisplay() {
    const ul = $("#phrase ul");

    [...this.phrase].forEach(function(element) {
      let $li = $(`<li>${element}</li>`);

      element == " "
        ? $li.prop("class", "space")
        : $li.prop("class", `hide letter ${element}`);

      ul.append($li);
    });
  }

  /**
   * Checks letter value passed in as value against the current active
   * phrase to see if it is on board.
   * @param {string} Will hold the value put in / letter captured.
   * @return {boolean} Returns true if letter is in active phrase, false if not.
   */

  checkLetter(value) {
    return this.phrase.includes(value);
  }

  /**
   * Displays the matched letter on the screen, by toggling class
   * hide and show.
   * @param {string} Will hold the selected letter value.
   */

  showMatchedLetter(value) {
    if ($(`.${value}`).hasClass("hide")) {
      $(`.${value}`).toggleClass("hide show");
    }
  }
}
