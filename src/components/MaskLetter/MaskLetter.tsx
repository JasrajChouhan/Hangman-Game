import maskLetterFun from './MaskLetterFun';

interface MaskLetterProps {
    originalWord: string;
    guessedLetters: string[];
}

function MaskLetter(props: MaskLetterProps) {
    const { originalWord, guessedLetters } = props;
    const renderWordArr = maskLetterFun(originalWord, guessedLetters);
    console.log(renderWordArr);
    const guessingWord = renderWordArr.map((letter) => (
        <span key={Math.random() * 10000} className="mx-3 h-20 text-6xl ">
            {letter}
        </span>
    ));
    return <div className="ml-5 my-10 font-semibold ">{guessingWord}</div>;
}

export default MaskLetter;
