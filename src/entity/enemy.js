class Enemy extends Entity {
    constructor(gameScreen, posX, posY, height, width, health, dictionary) {
        super(gameScreen, posX, posY, height, width, "/assets/images/characters/EVil Wizard 2/tile001.png", health, dictionary);
        this.element.classList.add("enemy");
    }

    attack() {
        
    }
}