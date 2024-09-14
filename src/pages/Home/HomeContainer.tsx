import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Home from './Home';
import configObj from '../../config/configFile';

function HomeContainer() {
    const [word, setWord] = useState<string | null | undefined>()
    const [hint, setHint] = useState<string | null | undefined>()

    let API_URI : string ;
    if(configObj.NODE_ENV === 'development') {
        API_URI = configObj.API_URL;
    }else {
        API_URI = "/api"
    }
    async function fetwetchWord() {
        try {
            const response = await fetch(API_URI)
            const data = await response.json();

            const { words } = data;

            // generate a radnom interger number 
            const randomIndex = Math.floor(Math.random() * words.length)
            console.log(words)

            setWord(words[randomIndex].selectedWord)
            setHint(words[randomIndex].hintWord)

        } catch (error) {
            toast.error("Something went wrong happend", {
                position: 'top-right'
            })
            console.log(error)
        }

    }
    useEffect(function () {
        fetwetchWord()
    }, [])

    console.log(word)
    return (
        <Home
            word={word}
            hint={hint}
        />
    )
}

export default HomeContainer