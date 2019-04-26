/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

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



 }