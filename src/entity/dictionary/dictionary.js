class Dictionary {
    constructor(words) {
        this.words = words
    }
    getWord(string) {
        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].word === string) {
                return this.words[i];
            }
        }
        return undefined;
    }


    getMeaning(string1, string2) {
        const firstWord = this.getWord(string1);
        const secondWord = this.getWord(string2);
        
        if (!firstWord || !secondWord) {
            return new MainMeaning("fail");      
        }
        else if (firstWord.isMatch(secondWord)) {
            return firstWord.subMeaning;
        }
        else {
            return firstWord.mainMeaning;
        }
    }

    
    getRandomMeaning() {
        const randomIndex1 = Math.floor(Math.random() * this.words.length);
        let randomIndex2 = randomIndex1;
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * this.words.length);
        }

        return this.getMeaning(this.words[randomIndex1].word, this.words[randomIndex2].word);   
    }
}