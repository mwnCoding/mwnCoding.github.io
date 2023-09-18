window.addEventListener('load', () => {
    let game = loadGame();

    const startButton = document.getElementById('start-button');
    const optionsButton = document.getElementById('options-button');
    const highscoresButton = document.getElementById('highscores-button');
    const backButtons = document.getElementsByClassName('back-button');

    console.log(backButtons);



    startButton.addEventListener('click', () => {
        game.startGame();
    });

    optionsButton.addEventListener('click', () => {
        game.showOptions();
    });

    highscoresButton.addEventListener('click', () => {
        game.showHighscores();
    });

    for (currentBackButton of backButtons) {
        currentBackButton.addEventListener('click', () => {
            game.showMainMenu();
        });
    }



    
});


function loadGame() {
    return new Game();
}
