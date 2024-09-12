import React from 'react';

interface LetterButtonsProps {
    text: string;
    guessedLetters: string[];
    onLetterClick: (letter: string) => void;
}

function LetterButtons({
    text,
    guessedLetters,
    onLetterClick,
}: LetterButtonsProps) {

    function handleLetterClick(event: React.MouseEvent<HTMLButtonElement>) {
        const characterOfTheLetter = event.currentTarget.value;
        onLetterClick?.(characterOfTheLetter);
    }

    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    
    const buttonStyle = (letter: string) => {
        if (guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter)
                ? 'bg-gradient-to-r from-green-600 to-green-400 text-white bg-green-400' 
                : 'bg-gradient-to-r from-red-600 to-red-400 text-white bg-red-400'} `; 
        } else {
            return 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 active:from-blue-700 active:to-blue-600 transition-all duration-300 border border-gray-300';
        }
    };

    const renderButton = (letter: string) => (
        <button
            key={`button-${letter}`}
            value={letter}
            onClick={handleLetterClick}
            disabled={guessedLettersSet.has(letter)}
            className={`h-12 w-12 m-1 text-lg font-bold rounded-lg shadow-2xl hover:shadow-inner hover:scale-110 active:scale-95 ${buttonStyle(letter)} disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-300 border`}
        >
            {letter}
        </button>
    );

    const topRow = "QWERTYUIOP".split('').map(renderButton);
    const middleRow = "ASDFGHJKL".split('').map(renderButton);
    const bottomRow = "ZXCVBNM".split('').map(renderButton);

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="flex justify-center space-x-2">{topRow}</div>
            <div className="flex justify-center space-x-2">{middleRow}</div>
            <div className="flex justify-center space-x-2">{bottomRow}</div>
        </div>
    );
}

export default LetterButtons;
