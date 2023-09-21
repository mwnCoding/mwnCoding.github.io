class Game {
    constructor() {
        this.startScreen = document.getElementById('start-screen');
        this.gameContainer = document.getElementById('game-container');
        this.nameScreen = document.getElementById('name-screen');
        this.instructionsScreen = document.getElementById('instructions-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.optionsScreen = document.getElementById('options-screen');
        this.highscoresScreen = document.getElementById('highscores-screen');
        this.meldButton = document.getElementById('meld-button');
        this.firstWord = document.getElementById('first-word');
        this.secondWord = document.getElementById('second-word');
        this.height = 80;
        this.width = 80;
        this.wave = 0;
        this.time = 0;
        //TODO: Add player after class definition
        console.log(this.gameScreen);
        this.player;
        //TODO: Add enemies array after class definition
        this.enemies;
        //TODO: Select first enemy after class definition
        this.target;
        this.background = '/assets/images/backgrounds/bulkhead-wallsx3.png';
        this.timer;
        this.animateId;
        this.waveData;
    }

    showOptions() {
        console.log("show options");
        this.startScreen.style.display = "none";
        this.optionsScreen.style.display = "flex";
    }

    showHighscores() {
        console.log("show highscores");
        this.startScreen.style.display = "none";
        this.highscoresScreen.style.display = "flex";
    }

    showMainMenu() {
        console.log("show main menu");
        this.highscoresScreen.style.display = "none";
        this.optionsScreen.style.display = "none";
        this.startScreen.style.display = "flex";
    }

    startGame() {
        console.log("starting game...");
        this.startScreen.style.display = "none";
        this.gameContainer.style.display = "flex";
        this.showNameScreenElement();
    }

    showNameScreenElement() {
        this.nameScreen.style.width = `${this.width}vw`;
        this.nameScreen.style.height = `${this.height}vh`
        this.nameScreen.style.display = "flex";
    }

    confirmName() {
        this.enterName();
        this.showInstructionsScreenElement();
    }

    enterName() {
        this.name = document.getElementById('name-input').value;
        document.getElementById('instructions-heading').innerText += `${this.name}!`;
    }

    showInstructionsScreenElement() {
        this.nameScreen.style.display = "none";
        this.instructionsScreen.style.width = `${this.width}vw`;
        this.instructionsScreen.style.height = `${this.height}vh`
        this.instructionsScreen.style.display = "flex";
    }

    showGameScreenElement() {
        this.instructionsScreen.style.display = "none";
        this.gameScreen.style.width = `${this.width}vw`;
        this.gameScreen.style.height = `${this.height}vh`
        this.gameScreen.style.backgroundImage = `url('${this.background}')`;
        this.gameScreen.style.display = "block";
        this.gameScreen.style.position = "relative";
        document.getElementById('word-input').style.display = "flex";
        this.createPlayer();
        this.startBattle();
    }

    createPlayer() {
        this.player = new Player(this.gameScreen, 30, 70, 9, 7, "/src/game_data/playerDictionary.json");
    }

    startBattle() {
        this.timer = setInterval(() => {
            this.time++;
        }, 1000)
        this.wave = 1;
        this.getWaveDataObject();
        this.gameLoop();
    }

    gameLoop() {
        this.update();

        document.getElementById('wave').innerText = this.wave;
        document.getElementById('time').innerText = this.time;

        this.animateId = requestAnimationFrame(() => this.gameLoop());
    }

    update() {

    }

    async getWaveDataObject() {
        const response = await fetch("/src/game_data/waveData.json");
        const wavesObject = await response.json();
        this.waveData = wavesObject;
        console.log(this.waveData);
    }

    checkForWave() {

    }

}