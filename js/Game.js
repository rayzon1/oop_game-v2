/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {
     
    constructor() {
        this.missed = 0;  // Will keep track of the number of missed guesses.
        this.phrases = this.createPhrases();  // Phrase objects to use with the game.
        this.activePhrase = null; // Nothing will be active on start.
    }

    /**
     * This will create the phrases needed for in-game use.
     * @return {array} An array of phrases that can be used in the game.
     */
    createPhrases() {
        let phrases = [
            new Phrase('phrase one'),
            new Phrase('phrase two'),
            new Phrase('phrase three'),
            new Phrase('phrase four'),
            new Phrase('phrase five')
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




 }