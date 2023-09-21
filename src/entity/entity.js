class Entity {
    constructor(gameScreen, posX, posY, height, width, sprite, health, dictionaryPath) {
        this.gameScreen = gameScreen;
        this.positionX = posX;
        this.positionY = posY;
        this.width = width;
        this.height = height;
        this.state;
        this.sprite = sprite;
        this.health = health;
        this.maxhealth = health;
        this.dictionary;

        this.parseDictionaryData(dictionaryPath);

        this.element = document.createElement("img");
        this.element.src = `${this.sprite}`;
        this.element.style.position = "absolute";

        this.element.style.left = `${this.positionX}%`;
        this.element.style.top = `${this.positionY}%`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.gameScreen.appendChild(this.element);
    }

    async parseDictionaryData(dictionaryPath) {
        const response = await fetch(dictionaryPath);
        const wordsObject = await response.json();
        this.dictionary = new Dictionary(wordsObject.words);
    }

    receiveDamage(damage) {
        if (typeof damage === "number") {
            this.health -= damage;
        }
        else {
            throw new Error("Error: Damage is not a number");
        }
    }

    //TODO: Do something with returned meaning
    meldWords(word1, word2) {
        if (word1 !== "" && word2 !== "") {
            const match = this.dictionary.getMeaning(word1, word2);
            return match;
        }
        else {
            console.log("ranodm")
            const randomMatch = this.dictionary.getRandomMatchMeaning();
            return randomMatch;
        }
    }

    changeState(state) {
        if (state === "idle" || state === "damage" || state === "attack") {
            this.state = state;
            this.changeSprite();
        }
        else {
            throw new Error("Error: State is not a valid state");
        }
    }

    changeSprite() {
        //TODO: Set correct paths and set timeout function for attack and damage state
        switch(this.state) {
            case "idle":
                this.sprite = "idle/sprite/path";
                break;
            case "damage":
                this.sprite = "damage/sprite/path";
                break;
            case "attack":
                this.sprite = "attack/sprite/path";
                break;
            default:
                throw new Error("Error: State should not be undefined");
        }
    }
}