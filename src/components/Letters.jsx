import { clsx } from 'clsx';

export default function Letters(props) {

  const letterElements = props.currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = props.isGameOver || props.guesses.includes(letter)

    return (
      <span 
        key={index}
        className={clsx(
          props.isGameOver && !props.guesses.includes(letter) && "missed-letter"
        )}
      >
        {shouldRevealLetter && letter.toUpperCase()}
      </span> 
    )}
  );


  return (
    <section className="word">
      {letterElements}
    </section>
  )
}