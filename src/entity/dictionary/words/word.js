class Word {
    constructor(word, language, definitions, mainMeaning, subMeaning) {
        this.word = word;
        this.language = language;
        this.definitions = definitions;
        this.mainMeaning = mainMeaning;
        if (subMeaning) {
            this.subMeaning = subMeaning
        } else {
            this.subMeaning = new MainMeaning("fail");
        }

    }

    isMatch(secondWord) {
        return this.mainMeaning.meaning === secondWord.mainMeaning.meaning;
    }

    getMeaningOnMatch(secondWord) {
        if (this.isMatch(secondWord) && this.word !== secondWord.word) {
            if (this.subMeaning) {
                console.log("submeaning shouldnt be undefined", this.subMeaning)
                return this.subMeaning;
            }
            else {
                return this.mainMeaning;
            }
        }
        else {
            return this.mainMeaning;
        }
    }
}