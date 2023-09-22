class Enemy extends Entity {
    constructor(gameScreen, posX, posY, height, width, health, dictionary) {
        super(gameScreen, posX, posY, height, width, "/assets/images/characters/EVil Wizard 2/tile001.png", health, dictionary);
        this.element.classList.add("enemy");
    }

    attack(target) {
<<<<<<< HEAD
        const meaning = this.dictionary.getRandomMeaning();
        if (meaning.effect === "fail") {
            this.receiveDamage(meaning.damage);
            console.log(`Failed cast damage ${meaning.damage}, hp ${this.health}`);
        }
        else {
            target.receiveDamage(meaning.damage);
            console.log(meaning.damage, this.health);
        }
        
=======
        const randomMeaning = this.dictionary.getRandomMeaning();
        target.receiveDamage(randomMeaning.damage);
        console.log(`${target} received ${randomMeaning.damage} and has ${target.health} hp left`);
>>>>>>> cleanup
    }
}