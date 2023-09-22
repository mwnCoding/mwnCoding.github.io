window.addEventListener('load', () => {
    let game = loadGame();

    const startButton = document.getElementById('start-button');
    const optionsButton = document.getElementById('options-button');
    const highscoresButton = document.getElementById('highscores-button');
    const backButtons = document.getElementsByClassName('back-button');
    const nameButton = document.getElementById('name-button');
    const instructionsButton = document.getElementById('instructions-button');
    const meldButton = document.getElementById('meld-button');
    const restartButtons = document.getElementsByClassName('restart-button');


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
    });

    meldButton.addEventListener('click', () => {
        const firstWord = game.firstWord.value.toLowerCase();
        const secondWord = game.secondWord.value.toLowerCase();
        if (firstWord && secondWord) {
        game.player.attack(firstWord, secondWord, game.target);
        game.firstWord.value = '';
        game.secondWord.value = '';
        game.isTurn = false;
        }
    });

    for (currentRestartButton of restartButtons) {
        currentRestartButton.addEventListener('click', () => {
            location.reload();
        })
    } 
});


function loadGame() {
    return new Game();
}
