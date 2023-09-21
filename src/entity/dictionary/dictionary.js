class Dictionary {
    constructor(words) {
        this.words = this.createDictionary(words);
    }

    createDictionary(wordsObject) {
        let wordList = [];
        for (let i = 0; i < wordsObject.length; i++) {
            wordList.push(wordsObject[i]);
        }
        return wordList;
    }

    getMeaning(word1, word2) {
        console.log(word1);
        console.log(word2);
        console.log(this.words);
        const firstWord = this.getWord(word1.toLowerCase());
        const secondWord = this.getWord(word2.toLowerCase());
        console.log(firstWord);
        console.log(secondWord);
        if (firstWord && secondWord) {
            return firstWord.getMeaningOnMatch(secondWord);
        }
        else {
            return new MainMeaning("fail");
        } 
    }

    getWord(word) {
        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].word === word) {
                return this.words[i];
            }
        }
        throw new Error("Error: word is not in dictionary");
    }


    //TODO: Decide if enemies are able to hurt themselves | current state: no
    getRandomMatchMeaning() {

        const randomWordIndex2 = Math.floor(Math.random() * (this.words.length));

        const randomWordIndex1 = Math.floor(Math.random() * this.words.length);
        const randomMeaning = this.getMeaning(this.words[randomWordIndex1].word, this.words[randomWordIndex2].word);
        return randomMeaning;
    }
}