class Word {
    constructor(word, language, definitions, mainMeaning, subMeaning) {
        this.word = word;
        this.language = language;
        this.definitions = definitions;
        this.mainMeaning = mainMeaning;

        this.subMeaning = subMeaning;

    }

    isMatch(secondWord) {
        return this.mainMeaning.meaning === secondWord.mainMeaning.meaning;
    }
}