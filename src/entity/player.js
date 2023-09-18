class Player extends Entity {
    constructor(gameScreen, posX, posY, height, width, health, dictionary) {
        super(gameScreen, posX, posY, height, width, health, dictionary);
    }

    attack(firstWord, secondWord) {
        if (typeof firstWord === "string" && typeof secondWord === "string") {
            let damage = 0;
            //TODO: Implement attack calculation
            return damage;
        }
        else {
            throw new Error("Error: Both words need to be a string");
        }
    }
}