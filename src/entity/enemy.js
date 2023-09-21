class Enemy extends Entity {
    constructor(gameScreen, posX, posY, height, width, health, dictionary) {
        super(gameScreen, posX, posY, height, width, "/assets/images/characters/EVil Wizard 2/tile001.png", health, dictionary);
        this.element.classList.add("enemy");
    }

    attack(target) {
        const randomMeaning = this.dictionary.getRandomMeaning();
        target.receiveDamage(randomMeaning.damage);
        console.log(`${target} received ${randomMeaning.damage} and has ${target.health} hp left`);
    }
}