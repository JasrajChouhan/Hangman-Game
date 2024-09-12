{/*
  * This is Play game component which play the game 
  * This component have children MaskedLettr or MaskedWord,Hangma and LetterButton
  * 
*/}

import Hangman from "../Hangman/Hangman";
import LetterButtons from "../LetterButtons/LetterButtons";
import MaskLetter from "../MaskLetter/MaskLetter";


interface PlayGameProps {
  selectedWord: string;
  guessedLettersArr: string[];
  step: number;
  hint : string ;
  hanldeLetterClick: (letter: string) => void;
}

function PlayGame(props: PlayGameProps) {
  const {
    selectedWord,
    guessedLettersArr,
    step,
    hanldeLetterClick,
    hint
  } = props;

  return (
    <>
      <h1 className="text-center text-6xl font-bold mt-10 ">{hint}</h1>
    <div className="flex flex-col md:flex-row justify-center items-center w-full h-screen p-4">
        
      <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
        {/* --- Masked Word--- */}
        <div className="mb-6">
          <MaskLetter
            originalWord={selectedWord}
            guessedLetters={guessedLettersArr}
          />
        </div>

        {/* ---Letter Buttons ----*/}
        <div className="w-full flex justify-center">
          <LetterButtons
            text={selectedWord}
            guessedLetters={guessedLettersArr}
            onLetterClick={hanldeLetterClick}
          />
        </div>
      </div>

      {/* --- Hangman Image ----*/}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Hangman
          step={step}
          selectedWord = {selectedWord}
          guessedLettersArr = {guessedLettersArr}
          
        />
      </div>

      
    </div>
    </>
  );
}

export default PlayGame;
