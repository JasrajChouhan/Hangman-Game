{/*
  * Logical compoent of PlayGame
  * 
*/}

import { useState } from "react";
import toast from 'react-hot-toast';
import { useLocation } from "react-router-dom";

import HashLoaderComp from "../Loader/HashLoderComp";
import PlayGame from "./PlayGame";


function PlayGameContainer() {
    const { state } = useLocation();
    const [guessedLettersArr, SetGuessedLettersArr] = useState<string[]>([])
    const [step, setStep] = useState<number>(0)


    function hanldeLetterClick(letter: string) {
        if (!state.selectedWord?.toUpperCase().includes(letter)) {
            // alert("You choose wrong")

            toast.error("Please select correct letter", {
                position: "top-right"
            })

            setStep((prevStep) => prevStep + 1)

        }

        SetGuessedLettersArr([...guessedLettersArr, letter]);
    }


    if (state.hint === null || state.hint === undefined) {
        return <div className="h-screen flex justify-center items-center" >
            <HashLoaderComp size={150} />
            </div> 


    }
    return (

        <PlayGame
            selectedWord={state?.selectedWord}
            guessedLettersArr={guessedLettersArr}
            step={step}
            hanldeLetterClick={hanldeLetterClick}
            hint={state.hint}
        />
    )
}

export default PlayGameContainer