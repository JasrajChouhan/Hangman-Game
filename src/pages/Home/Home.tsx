import { Link } from "react-router-dom";
import HashLoaderComp from "../../components/Loader/HashLoderComp";


interface HomeProps {
    hint: string | null | undefined;
    word: string | null | undefined;
    loadingStatus: boolean;
    errorStatus: boolean;
}

function Home(props: HomeProps) {
    const {
        hint,
        word,
        loadingStatus,
    } = props

    if (loadingStatus) {
        return <div className="h-screen flex justify-center items-center" >
            <HashLoaderComp />
        </div>
    }
    return (
        <div className="relative h-screen bg-cover bg-center bg-[url('./assets/images/backgroundImage.jpg')]">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative flex flex-col justify-center items-center h-full text-white text-center p-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    Welcome to Hangman
                </h1>
                <p className="text-lg md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
                    Test your guessing skills in this fun and challenging game!
                </p>

                <div className="flex gap-4" >
                    <Link to={"/play"} state={{
                        selectedWord: word,
                        hint: hint
                    }} className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
                        Single Player
                    </Link>

                    <Link to={"/start"} state={{
                        selectedWord: word,
                        hint: hint
                    }} className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
                        Multiplyer Game
                    </Link>

                </div>
                <p className="mt-4 text-sm animate__animated animate__fadeIn animate__delay-4s">
                    © 2024 Your Game Name. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Home