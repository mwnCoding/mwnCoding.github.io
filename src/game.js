<<<<<<< HEAD
import waveData from "./game_data/waveData.json";
import playerDictionaryData from "./game_data/playerDictionary.json"
import wizardDictionaryData from "./game_data/wave_dictionaries/wave00/wizardDictionary.json"
=======

>>>>>>> cleanup

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
        this.background = '/assets/images/backgrounds/bulkhead-wallsx3.png';

        this.wave = 0;
        this.time = 0;
        this.player;
        this.enemies = [];
        this.target;
        this.isTurn = true;

        this.words = [];

        this.timer;
        this.animateId;
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
        this.createWords();
        this.createPlayer();
    }

<<<<<<< HEAD
    async createPlayer() {
        this.player = new Player(this.gameScreen, 30, 70, 64, 64, "/src/game_data/playerDictionary.json");
        
        
        const response = await fetch(this.player.dictionaryPath);
        const wordsObject = await response.json();
        this.player.createDictionary();

        console.log(this.player);

        this.startBattle();
=======
    createWords() {
        const waterDefinitions =[
            "a colourless, transparent, odourless liquid",
            "pour or sprinkle water to encourage plant growth"
        ]
        const waterMainMeaning = new MainMeaning("liquid");
        const waterSubMeaning = new SubMeaning("growth", "heal", 10, "/assets/images/meldSprites/heal.png");
        const water = new Word("water", "english", waterDefinitions, waterMainMeaning , waterSubMeaning);

        const wasserDefintions = [
            "a colourless, transparent, odourless liquid",
            "water in a moving body of water"
        ]
        const wasserMainMeaning = new MainMeaning("liquid");
        const wasserSubMeaning = new SubMeaning("moving body of water", "wave", 20, "/assets/images/meldSprites/wave.png");
        const wasser = new Word("wasser", "german", wasserDefintions, wasserMainMeaning, wasserSubMeaning);

        this.words.push(water);
        this.words.push(wasser);
>>>>>>> cleanup
    }

        createPlayer() {
            const playerDictionary = new Dictionary(this.words);
            this.player = new Player(this.gameScreen, 220, 360, 80, 80, playerDictionary);
        }

    startBattle() {
        this.timer = setInterval(() => {
            this.time++;
<<<<<<< HEAD
        }, 1000);
        
        const response = await fetch("/src/game_data/waveData.json");
        const wavesObject = await response.json();
        this.waveData = wavesObject;
=======
        }, 1000)    
>>>>>>> cleanup

        this.startNextWave();
    }

    gameLoop() {
<<<<<<< HEAD
        document.getElementById('wave').innerText = this.wave;
        document.getElementById('time').innerText = this.time;
=======
    
        if (this.enemies.length === 0) {
            this.getNextWave();
        }
        else {
            this.battle();
        }
>>>>>>> cleanup

        this.update();


        if (this.enemies.length === 0) {
            this.startNextWave()
        }
        else {
            this.battle();
        }

        this.animateId = requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        document.getElementById('wave').innerText = this.wave;
        document.getElementById('time').innerText = this.time;
    }

<<<<<<< HEAD
    async startNextWave() {
        this.wave += 1;
        await this.createEnemy();
        this.gameLoop();
    }

    async createEnemy() {
        console.log("starting first wave");
        const firstWaveData = this.waveData.waves[this.wave - 1];
        const newEnemy = new Enemy(this.gameScreen, 50, 37, 360, 360, firstWaveData.sprite, firstWaveData.health, firstWaveData.dictionaryPath);
 
        const response = await fetch(newEnemy.dictionaryPath);
        const wordsObject = await response.json();
        newEnemy.createDictionary();

        this.enemies.push(newEnemy);
=======
    getNextWave() {
        this.wave += 1;
        const enemyDict = new Dictionary(this.words);
        switch(this.wave) {
            case 1:

                const waveOneEnemy = new Enemy(this.gameScreen, 350, 185, 360, 380, 25, enemyDict);
                this.enemies.push(waveOneEnemy);
                this.target = waveOneEnemy;
                break;
            case 2:
                const waveTwoEnemy = new Enemy(this.gameScreen, 350, 185, 360, 380, 30, enemyDict);
                this.enemies.push(waveTwoEnemy);
                this.target = waveTwoEnemy;
                break;
            case 3:
                const waveThreeEnemy = new Enemy(this.gameScreen, 350, 185, 360, 380, 35, enemyDict);
                this.enemies.push(waveThreeEnemy);
                this.target = waveThreeEnemy;
                break;
            default:
                this.showWinScreen();
                break;
        }
>>>>>>> cleanup
    }

    battle() {
        if (!this.isTurn) {
            this.meldButton.disabled = true;
            for (const enemy of this.enemies) {
                enemy.attack(this.player);
            }
            if (this.player.health <= 0) {
                this.showEndScreen();
            }
            this.isTurn = true;
        }
        else {
            this.meldButton.disabled = false;
            if (this.enemies[0].health <= 0) {
                this.enemies[0].element.remove();
                this.enemies = [];
            }
        }
    }

    setTarget(enemy) {
        if (this.target) {
            this.target.element.classList.remove("target");
            this.target = enemy;
            this.target.element.classList.remove("target");
        }
        else {
            this.target = enemy;
            this.target.element.classList.add("target");
        }
    }

    showWinScreen() {
        console.log("You win!");
    }

    showEndScreen() {
        console.log("You lost!");
    }

    
}