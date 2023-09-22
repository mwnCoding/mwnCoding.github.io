class Entity {
    constructor(gameScreen, posX, posY, height, width, sprite, health, dictionary, healthBarId) {
        this.gameScreen = gameScreen;
        this.positionX = posX;
        this.positionY = posY;
        this.width = width;
        this.height = height;
        this.state;
        this.sprite = sprite;
        this.health = health;
        this.maxhealth = health;
        this.dictionary = dictionary;
        this.greenHealthBar = document.getElementById(healthBarId);

        this.element = document.createElement("img");
        this.element.src = `${this.sprite}`;
        this.element.style.position = "absolute";

        this.element.style.left = `${this.positionX}%`;
        this.element.style.top = `${this.positionY}%`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.gameScreen.appendChild(this.element);
    }


    receiveDamage(damage) {
        this.health -= damage;
        console.log(this, `receives ${damage} damage`);
        const newWidth = this.health / this.maxhealth * 200;
        this.greenHealthBar.style.width = `${newWidth}px`;
    }

    receiveHealing(heal) {
        this.health += heal;
        console.log(this, `receives ${heal} heal`)
        if (this.health > this.maxhealth) {
            this.health = this.maxhealth;
        }
        const newWidth = this.health / this.maxhealth * 200;
        this.greenHealthBar.style.width = `${newWidth}px`;
    }

    getMeaningEffect(meaning, target) {
        switch(meaning.effect) {
            case "wave":
                target.receiveDamage(meaning.damage);
                break;
            case "heal":
                this.receiveHealing(meaning.damage);
                break;
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