class Word {
    constructor(word, language, definition, mainMeaning, subMeaning) {
        this.word = word;
        this.language = language;
        this.definition = definition;
        this.mainMeaning = mainMeaning;
        this.subMeaning = subMeaning;
    }

    isMatch(secondWord) {
        return this.mainMeaning === secondWord.mainMeaning;
    }

    getSubMeaningOnMatch(secondWord) {
        if (this.isMatch(secondWord)) {
            return this.subMeaning;
        }
        else {
            return "fail";
        }
    }
}