import { useNavigate } from "react-router-dom";

interface GamePopupModelProp {
    gameStatus : "loose" | "win" | "playing";
}

export default function GameStatusPopupModel(props : GamePopupModelProp) {
    const {gameStatus} = props;
    const navigate = useNavigate()
    function handleWindowRefresh() {
        window.location.reload();
    } 

    function handleWindowRefreshWhenUserIsWin(){
        navigate('/')
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-transparent bg-opacity-50 z-50">
            <div className="bg-gray-800 border-4 border-gray-700 shadow-2xl rounded-3xl w-[300px] md:w-[400px] h-[250px] p-6 relative flex flex-col items-center justify-between">
                
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-white text-xl focus:outline-none"
                    onClick={handleWindowRefresh}
                >
                    ✕
                </button>

                {/* Message Section */}
                <div className="text-center text-white">
                    {
                        gameStatus === "win" ? (
                            <h1>You correctly guess the word</h1>
                        ) : 
                        (<>
                            <h1 className="text-2xl font-bold mb-2">You Lost the Game</h1>
                            <h2 className="text-lg">Please try again!</h2>
                        </>)
                    }
                </div>

                {/* Retry Button Section */}
                <div className="">
                    <button
                        className="px-6 py-2 rounded-md text-white bg-green-600 hover:bg-green-800 transition duration-200 ease-in-out"
                        onClick={gameStatus === "win" ? handleWindowRefreshWhenUserIsWin : handleWindowRefresh}
                    >
                        {gameStatus === "loose" ? "Retry" : "Home"}
                    </button>
                </div>
            </div>

        </div>
    );
}
