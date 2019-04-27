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
     *  Display phrase on game board.
     */
    
    addPhraseToDisplay() {
        const ul = $('#phrase ul');

        [...this.phrase].forEach(function(element){
            let $li = $(`<li>${element}</li>`);

            element == ' ' ? 
                $li.prop('class', 'space') :
                $li.prop('class', `hide letter ${element}`);
            
             ul.append($li);
       
        });
    }


    /**
     * Checks letter value passed in as value against the current active
     * phrase to see if it is on board.
     * @param {value} Will hold the value put in / letter captured.
     */
    checkLetter(value) {
        return this.phrase.includes(value);
    }

    /**
     * Displays the matched letter on the screen.
     * @param {value} Will hold the selected letter value. 
     */

    showMatchedLetter(value) {
        $(`.${value}`).toggleClass('hide show');
    
    }



 }