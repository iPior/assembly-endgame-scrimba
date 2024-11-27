
export default function Letters(props) {
  const currentWord = props.currentWord;

  const letterElements = currentWord.split("").map((letter, index) => (
    <span 
    key={index}
    >
      {letter.toUpperCase()}
    </span>
  ));

  return (
    <section className="word">
      {letterElements}
    </section>
  )
}