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


    /**
     * Begins game by selecting the random phrase and displaying it to
     * the user.
     */
    startGame() {
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
    }


    /**
     * Logic and handling for user interaction with the keyboard.
     * @param {letter} This will be the captured click.
     */
    handleInteraction(letter) {
        // Captures letter selected from click event.
        const phrase = new Phrase(this.activePhrase.phrase);
        if (phrase.checkLetter(letter)) {
            phrase.showMatchedLetter(letter); // Pass in letter to display the letter block on board.
        }
        



    }




 }