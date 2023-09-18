class Dictionary {
    constructor(words) {
        this.words = words;
    }

    getMeaning(word1, word2) {
        if (this.words.includes(word1) && this.words.includes(word2)) {
            return word1.getMeaningOnMatch(word2);
        }
        else {
            return word1.mainMeaning;
        } 
    }


    //TODO: Decide if enemies are able to hurt themselves | current state: no
    getRandomMatchMeaning() {
        const randomWordIndex1 = Math.floor(Math.random() * this.words.length);
        let randomWordIndex2 = randomWordIndex1;

        while (randomWordIndex1 === randomWordIndex2) {
            randomWordIndex2 = Math.floor(Math.random() * this.words.length);
        }

        getMeaning(this.words[randomWordIndex1], this.words[randomWordIndex2]);
    }
}