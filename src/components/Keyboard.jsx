
export default function Keyboard(props) {
  const { currentWord, guesses } = props

  const keyboardElements = props.alphabet.split("").map(letter => (
    <button 
      key={letter}
      disabled={props.isGameOver}
      className={
        guesses.includes(letter) ?
           (currentWord.includes(letter) ? 'correct-guess' : 'incorrect-guess') :
           ''
      }
      onClick={() => props.handleOnClick(letter)}
    >
      {letter.toUpperCase()}
    </button>
  ));

  return (
    <section className="keyboard">
      {keyboardElements}
    </section>
  )
}