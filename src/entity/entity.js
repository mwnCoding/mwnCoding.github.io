class Entity {
    constructor(gameScreen, posX, posY, height, width, health, dictionary) {
        this.gameScreen = gameScreen;
        this.positionX = posX;
        this.positionY = posY;
        this.width = width;
        this.height = height;
        this.state;
        this.sprite;
        this.health = health;
        this.dictionary = dictionary;
    }

    receiveDamage(damage) {
        if (typeof damage === "number") {
            this.health -= damage;
        }
        else {
            throw new Error("Error: Damage is not a number");
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