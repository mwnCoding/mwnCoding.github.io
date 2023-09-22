class Player extends Entity {
    constructor(gameScreen, posX, posY, height, width, dictionary) {
        super(gameScreen, posX, posY, height, width, "/assets/images/characters/hooded_sprites/tile000.png", 100, dictionary);
        this.greenHealthBar = document.getElementById("health-bar-green");
    }


    attack(string1, string2, target) {
        const meaning = this.dictionary.getMeaning(string1, string2);

        this.getMeaningEffect(meaning, target);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        const newWidth = this.health * 2;
        this.greenHealthBar.style.width = `${newWidth}px`;
    }

    receiveHealing(heal) {
        super.receiveHealing(heal);
        const newWidth = this.health * 2;
        this.greenHealthBar.style.width = `${newWidth}px`;
    }
}