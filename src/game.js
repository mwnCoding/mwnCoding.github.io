class Game {
    constructor() {
        this.startScreen = document.getElementById('start-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.optionsScreen = document.getElementById('options-screen');
        this.highscoresScreen = document.getElementById('highscores-screen');
        this.height = 600;
        this.width = 500;
        this.wave = 0;
        this.time = 0;
        //TODO: Add player after class definition
        this.player;
        //TODO: Add enemies array after class definition
        this.enemies = new Array(3);
        //TODO: Select first enemy after class definition
        this.target;
    }

    startGame() {

    }

    showOptions() {

    }

    showHighscores() {
        consloe.log("show highscores");
        this.startScreen.style.display = none;
        this.highscoresScreen.style.display = flex;
    }

    showMainMenu() {

    }
}