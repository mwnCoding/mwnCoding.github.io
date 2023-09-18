window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button');
    const instructionsButton = document.getElementById('instructions-button');
    const optionsButton = document.getElementById('options-button');

    let game;

    function startGame() {
        console.log('Starting game...');
        game = new Game();
        game.start();
    }

    startButton.addEventListener('click', () => {
        
    });
});