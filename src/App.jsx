import { useState } from 'react'
import Status from './components/Status'
import Language from './components/Languages'
import Header from './components/Header';
import Letters from './components/Letters';
import Keyboard from './components/Keyboard';


export default function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guesses, setGuesses] = useState([]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  console.log(guesses)

  function guess(letter) {
    if (!guesses.includes(letter)) {
      setGuesses(prev => [...prev, letter])
    }
  }

  return (
    <>
      <Header />
      <Status />
      <Language />
      <Letters currentWord={currentWord} />
      <Keyboard 
        alphabet={alphabet}
        currentWord={currentWord}
        guesses={guesses}
        handleOnClick={guess}
      />
      <button className="new-game">New Game</button>
    </>
  )
}