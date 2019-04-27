/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();
 
$('#btn__reset').on('click', function() {
    game.startGame();
    
});

$('.key').on('click', function() {
    game.handleInteraction($(this).text());
})


