import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-[url('./assets/images/backgroundImage.jpg')]">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col justify-center items-center h-full text-[#FF4500 ] text-center p-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Hangman
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Test your guessing skills in this fun and challenging game!
        </p>
        <Link to="/start" className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
          Start Game
        </Link>
        <p className="mt-4 text-sm animate__animated animate__fadeIn animate__delay-4s">
          © 2024 Your Game Name. All rights reserved.
        </p>
      </div>
    </div>
  )
}

// src\assets\images\backgroundImage.jpg