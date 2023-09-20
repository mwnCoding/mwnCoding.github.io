window.addEventListener('load', () => {
    let game = loadGame();

    const startButton = document.getElementById('start-button');
    const optionsButton = document.getElementById('options-button');
    const highscoresButton = document.getElementById('highscores-button');
    const backButtons = document.getElementsByClassName('back-button');
    const nameButton = document.getElementById('name-button');
    const instructionsButton = document.getElementById('instructions-button');


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

    nameButton.addEventListener('click', () => {
        game.confirmName();
    });

    instructionsButton.addEventListener('click', () => {
        game.showGameScreenElement();
    })
});


function loadGame() {
    return new Game();
}
