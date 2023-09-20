class Word {
    constructor(word, language, definitions, mainMeaning, subMeaning) {
        this.word = word;
        this.language = language;
        this.definitions = definitions;
        this.mainMeaning = mainMeaning;
        this.subMeaning = subMeaning;
    }

    isMatch(secondWord) {
        return this.mainMeaning === secondWord.mainMeaning;
    }

    getMeaningOnMatch(secondWord) {
        if (this.isMatch(secondWord) && this.word !== secondWord.word) {
            return this.subMeaning;
        }
        else {
            return this.mainMeaning;
        }
    }
}