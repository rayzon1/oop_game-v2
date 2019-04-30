/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 *
 * Description: This game will select a random phrase upon start for the user to guess. Each
 * game the user will have 5 tries at guessing the hidden phrase using letters from the virtual
 * keyboard. If all lives are lost a splash screen with lost message is displayed as well as a
 * button to reload. If the user guesses the phrase, the win screen will display with the reload
 * button showing.
 *
 * Author: Gerardo Keys
 *
 * */

/**
 * New Game() class set to variable which will be instatiated by listeners below
 * and hide specific tiles / buttons upon load.
 */
const game = new Game();
$(".reload").hide();
$("#game_over_title").hide();

/**
 * Start Game button listener. When clicked the game will begin by calling
 * the startGame() function.
 */
$("#btn__reset").on("click", function() {
  game.startGame();
});

/**
 * Key click handler. When button is clicked, will call handleInteraction
 * function.
 */
$(".key").on("click", function() {
  game.handleInteraction($(this));
});

/**
 * Global Keydown listener for keyboard presses. Pressing keys will trigger
 * a click on the specific letter.
 * Calls handleInteraction method through simulating a click on associated 
 * button.
 */
$(document).on("keydown", function(event) {
  const keys = $(".key");
  const arr = [...keys];
  for (let i = 0; i < arr.length; i++) {
    if (event.key == $(arr[i]).text()) {
      $(arr[i]).trigger("click");
    }
  }
});
