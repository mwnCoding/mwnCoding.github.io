class Dictionary {
    constructor(words) {
        this.words = words
    }

<<<<<<< HEAD
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
=======
    getWord(string) {
        for (let i = 0; i < this.words.length; i++) {
            console.log(this.words[i]);
            if (this.words[i].word === string) {
                return this.words[i];
            }
        }
        return undefined;
    }


    getMeaning(string1, string2) {
        const firstWord = this.getWord(string1);
        const secondWord = this.getWord(string2);

        console.log(`The first word is ${firstWord} and the second word is ${secondWord}`)
        
        if (!firstWord || !secondWord) {
            return new MainMeaning("fail");      
        }
        else if (firstWord.isMatch(secondWord)) {
            return firstWord.subMeaning;
        }
        else {
            return firstWord.mainMeaning;
        }
>>>>>>> cleanup
    }

    
    getRandomMeaning() {
        const randomIndex1 = Math.floor(Math.random() * this.words.length);
        let randomIndex2 = randomIndex1;

<<<<<<< HEAD
    //TODO: Decide if enemies are able to hurt themselves | current state: no
    getRandomMatchMeaning() {

        const randomWordIndex2 = Math.floor(Math.random() * (this.words.length));

        const randomWordIndex1 = Math.floor(Math.random() * this.words.length);
        const randomMeaning = this.getMeaning(this.words[randomWordIndex1].word, this.words[randomWordIndex2].word);
        return randomMeaning;
=======
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * this.words.length);
        }

        return this.getMeaning(this.words[randomIndex1].word, this.words[randomIndex2].word);
>>>>>>> cleanup
    }
}