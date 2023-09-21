class Enemy extends Entity {
    constructor(gameScreen, posX, posY, height, width, sprite, health, dictionaryPath) {
        super(gameScreen, posX, posY, height, width, sprite, health, dictionaryPath);
        this.element.classList.add("enemy");
    }

    attack(target) {
        const meaning = this.meldWords();
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