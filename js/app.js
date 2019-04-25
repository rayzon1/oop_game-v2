/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();
 const phrase = new Phrase();

 game.phrases.forEach((phrase, index) => {
     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
 })
