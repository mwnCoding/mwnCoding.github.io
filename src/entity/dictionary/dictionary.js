class Dictionary {
    constructor(words) {
        this.words = this.createDictionary(words);
    }

    createDictionary(words) {
        let wordObjectArray = [];
        for (const word of words) {
            const mainMeaning = new MainMeaning(word.mainMeaning.word);
            if(word.hasProperty("subMeaning")) {
               const subMeaning = new SubMeaning(word.subMeaning.meaning, word.subMeaning.effect, word.subMeaning.damage, word.subMeaning.sprite); 
               wordObjectArray.push(new Word(word.word, word.language, word.definitions, mainMeaning, subMeaning));
            }
            else {
                wordObjectArray.push(new Word(word.word, word.language, word.definitions, mainMeaning));
            }
        }
        return wordObjectArray;
    }

    getMeaning(word1, word2) {
        console.log("getting meaning");
        const firstWord = this.getWord(word1);
        const secondWord = this.getWord(word2);
        if (firstWord && secondWord) {
            return firstWord.getMeaningOnMatch(secondWord);
        }
        else {
            return new MainMeaning("fail");
        } 
    }

    getWord(word) {
        for (const currentWord of this.words) {
            if (currentWord.word === word) {
                return currentWord;
            }
        }
        return null;
    }


    //TODO: Decide if enemies are able to hurt themselves | current state: no
    getRandomMatchMeaning() {
        const randomWordIndex1 = Math.floor(Math.random() * (this.words.length));
        console.log(randomWordIndex1);
        console.log(this.words.length);
        let randomWordIndex2 = randomWordIndex1;
        randomWordIndex2 = Math.floor(Math.random() * (this.words.length));

        return this.getMeaning(this.words[randomWordIndex1].word, this.words[randomWordIndex2].word);
    }
}