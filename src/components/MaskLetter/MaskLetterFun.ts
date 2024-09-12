function maskLetterFun(originalWord: string, guessedLetters: string[]) {

    const guessedLettersSet = new Set(guessedLetters.map((letter) => letter.toUpperCase()))
    const originalWordArr = originalWord.split('').map((letter) => letter.toUpperCase())


    const result = originalWordArr.map((letter) => {
        if (guessedLettersSet.has(letter)) return letter;
        else return "_";
    })

    return result;
}

export default maskLetterFun;