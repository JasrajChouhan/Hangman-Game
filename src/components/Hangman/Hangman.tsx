
import { useEffect, useState } from "react";


import Level1 from '../../assets/images/1.svg';
import Level2 from '../../assets/images/2.svg';
import Level3 from '../../assets/images/3.svg';
import Level4 from '../../assets/images/4.svg';
import Level5 from '../../assets/images/5.svg';
import Level6 from '../../assets/images/6.svg';
import Level7 from '../../assets/images/7.svg';
import Level8 from '../../assets/images/8.svg';

import GameStatusPopupModel from "../Popup/GameStatusPopupModel";



interface HangmanProps {
    step: number;
    selectedWord: string
    guessedLettersArr: string[]
}

function Hangman(props: HangmanProps) {

    const {
        step,
        selectedWord,
        guessedLettersArr
    } = props


    const [gameStatus, setGameStaus] = useState<"loose" | "win" | "playing">()
    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8]


    useEffect(() => {
        if (step > images.length - 1) {
            setGameStaus("loose")
        }
        console.log(guessedLettersArr);

        const normalizedSelectedWord = selectedWord.toLowerCase();
        const normalizedGuessedLetters = guessedLettersArr.map((char) => char.toLowerCase());

        const correctGuess = normalizedGuessedLetters.filter((char) => normalizedSelectedWord.includes(char));
        console.log('Correct Guesses:', correctGuess);

        if (new Set(correctGuess).size === new Set(selectedWord).size && gameStatus !== "loose") {
            setGameStaus("win")
        }

    }, [step, guessedLettersArr, selectedWord, gameStatus, images.length])

    if (gameStatus === "loose" || gameStatus === "win") {
        return <GameStatusPopupModel gameStatus={gameStatus} />
    }


    return (

        <>

            <div className="w-full md:w-[300px] h-auto flex justify-center items-center">
                <img
                    src={step > images.length - 1 ? images[images.length - 1] : images[step]}
                    alt={`Hangman step ${step}`}
                    className="w-full h-auto max-w-[300px] object-contain"
                />

            </div>
        </>
    )
}

export default Hangman