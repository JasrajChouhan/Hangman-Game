import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import configObj from '../../config/configFile';
import Home from './Home';

function HomeContainer() {
    const [word, setWord] = useState<string | null | undefined>()
    const [hint, setHint] = useState<string | null | undefined>()

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const localhostBackendUrl = import.meta.env.VITE_LOCALHOST_BACKEND_URI;

    const isProduction = configObj.NODE_ENV === 'production'
    console.log(isProduction)
    let API_URI = isProduction ? configObj.API_URL : localhostBackendUrl

    async function fetchWords() {
        try {
            setLoading(true)
            setError(false)

            const response = await fetch(API_URI)
            if (!response.ok) {
                if(response.status === 0) {
                    throw new Error(`CORS or Network Error: Unable to connect to the server.`)
                }
                throw new Error(`Failed to fetch data`)
            }
            const data = await response.json();

            const { words } = data;
            setLoading(false)

            // generate a radnom interger number 
            const randomIndex = Math.floor(Math.random() * words.length)

            setWord(words[randomIndex].selectedWord)
            setHint(words[randomIndex].hintWord)

        } catch (error : any) {
            setError(true)
            setLoading(false)
            if (error.message.includes('CORS')) {
                toast.error('CORS error: The server is not allowing requests from this domain.', {
                    position: 'top-right',
                });
            } else if (error.message.includes('NetworkError')) {
                toast.error('Network Error: Please check your internet connection or try again later.', {
                    position: 'top-right',
                });
            } else {
                toast.error(error.message || 'Something went wrong', {
                    position: 'top-right',
                });
            }

            
        }

    }
    useEffect(function () {
        fetchWords()
    }, [])

    console.log(word)
    return (
        <Home
            word={word}
            hint={hint}
            loadingStatus = {loading}
            errorStatus = {error}
        />
    )
}

export default HomeContainer