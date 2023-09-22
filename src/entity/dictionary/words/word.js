class Word {
    constructor(word, language, definitions, mainMeaning, subMeaning) {
        this.word = word;
        this.language = language;
        this.definitions = definitions;
        this.mainMeaning = mainMeaning;
<<<<<<< HEAD
        if (subMeaning) {
            this.subMeaning = subMeaning
        } else {
            this.subMeaning = new MainMeaning("fail");
        }
=======
        this.subMeaning = subMeaning;
>>>>>>> cleanup

    }

    isMatch(secondWord) {
        return this.mainMeaning.meaning === secondWord.mainMeaning.meaning;
    }
<<<<<<< HEAD

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
=======
>>>>>>> cleanup
}