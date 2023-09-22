class Player extends Entity {
    constructor(gameScreen, posX, posY, height, width, dictionary) {
        super(gameScreen, posX, posY, height, width, "/assets/images/characters/hooded_sprites/tile000.png", 100, dictionary, "health-bar-player-green");
    }


    attack(string1, string2, target) {
        const meaning = this.dictionary.getMeaning(string1, string2);

        this.getMeaningEffect(meaning, target);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
    }

    receiveHealing(heal) {
        super.receiveHealing(heal);
    }
}