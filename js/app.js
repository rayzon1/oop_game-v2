/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * 
 * Description: This game will select a random phrase upon start for the user to guess. Each
 * game the user will have 5 tries at guessing the hidden phrase using letters from the virtual
 * keyboard. 
 * 
 * */

 const game = new Game();
 




$('#btn__reset').on('click', function() {
    game.startGame(); 
});





$('.key').on('click', function() {
    game.handleInteraction($(this));
    $(this).prop('disabled', true);
})




$(document).on('keydown', function(event){
    const keys = $('.key');
    const arr = [...keys];
    for(let i = 0; i < arr.length; i ++){
        if(event.key == $(arr[i]).text()) {
            $(arr[i]).trigger('click');
        } 
    }
    
})

