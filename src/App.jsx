import { useState } from 'react'
import Status from './components/Status'
import Language from './components/Languages'
import Header from './components/Header';
import Letters from './components/Letters';
import Keyboard from './components/Keyboard';
import { languages } from "./data/languages"
import { words } from "./data/words"
import Confetti from "react-confetti"

/**
 * Backlog:
 * 
 * - Confetti drop when the user wins
**/


export default function App() {
  
  const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * (words.length - 1))]);
  const [guesses, setGuesses] = useState([]);
  const wrongGuessCount = guesses.filter(letter => !currentWord.includes(letter)).length;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const isGameWon = currentWord.split('').every(letter => guesses.includes(letter))
  const isGameOver = wrongGuessCount >= languages.length - 1;

  const lastGuessedLetter = guesses[guesses.length - 1];
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  function guess(letter) {
    if (!guesses.includes(letter)) {
      setGuesses(prev => [...prev, letter])
    }
  }

  function resetGame() {
    setCurrentWord(words[Math.floor(Math.random() * (words.length - 1))]);
    setGuesses([]);
  }


  console.log(currentWord)
  return (
    <>
      {isGameWon && 
        <Confetti 
        recycle={false}
        numberOfPieces={1000}
        />
      }
      <Header />
      <Status 
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        currentWord={currentWord}
        lastGuess={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
        language={"HTML"}
      />
      <Language 
        wrongGuessCount={wrongGuessCount}
      />
      <Letters 
        currentWord={currentWord} 
        guesses={guesses}
        isGameOver={isGameOver}
      />
      <Keyboard 
        isGameOver={isGameOver}
        alphabet={alphabet}
        currentWord={currentWord}
        guesses={guesses}
        handleOnClick={guess}
      />
      {isGameOver ?
        <button className="new-game" onClick={resetGame}>New Game</button> :
        isGameWon ?
          <button className="new-game" onClick={resetGame}>New Game</button> : null
      }
    </>
  )
}