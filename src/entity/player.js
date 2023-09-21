class Player extends Entity {
    constructor(gameScreen, posX, posY, height, width, dictionaryPath) {
        super(gameScreen, posX, posY, height, width, "/assets/images/characters/hooded_sprites/tile000.png", 100, dictionaryPath);
    }


    attack(word1, word2, target) {
        const meaning = this.meldWords(word1, word2);
        console.log(meaning);
        if (meaning.effect === "fail") {
            this.receiveDamage(meaning.damage);
            console.log(`Failed cast damage ${meaning.damage}, hp ${this.health}`);
        }
        else {
            target.receiveDamage(meaning.damage);
            console.log(meaning.damage, this.health);
        }
    }
}