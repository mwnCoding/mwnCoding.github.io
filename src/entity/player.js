class Player extends Entity {
    constructor(gameScreen, posX, posY, height, width, dictionary) {
        super(gameScreen, posX, posY, height, width, "/assets/images/characters/hooded_sprites/tile000.png", 100, dictionary);
    }


    attack(string1, string2, target) {
        console.log("player atacking")
        const meaning = this.dictionary.getMeaning(string1, string2);
        target.receiveDamage(meaning.damage);
        console.log(`${target} received ${meaning.damage} and has ${target.health} hp left`);
    }
}