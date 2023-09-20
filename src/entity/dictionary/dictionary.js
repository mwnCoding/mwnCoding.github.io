class Dictionary {
    constructor(words) {
        this.words = this.createDictionary(words);
    }

    createDictionary(words) {
        let wordObjectArray = [];
        for (const word of words) {
            const mainMeaning = new MainMeaning(word.mainMeaning.word);
            const subMeaning = new SubMeaning(word.subMeaning.meaning, word.subMeaning.effect, word.subMeaning.damage, word.subMeaning.sprite);
            wordObjectArray.push(new Word(word.word, word.language, word.definitions, mainMeaning, subMeaning));
        }
        return wordObjectArray;
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