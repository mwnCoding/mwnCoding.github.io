window.addEventListener('load', () => {
    let game = loadGame();

    const startButton = document.getElementById('start-button');
    const optionsButton = document.getElementById('options-button');
    const highscoresButton = document.getElementById('highscores-button');



    startButton.addEventListener('click', () => {

    });

    highscoresButton.addEventListener('click', () => {
        game.showHighscores()
    });
});


function loadGame() {
    return new Game();
}
