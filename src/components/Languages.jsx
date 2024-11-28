import { languages } from "../data/languages"
import { clsx } from 'clsx';

export default function Language(props) {

  const languagesList = languages.map((language, index) => (
    <span 
      key={language.name} 
      style={{backgroundColor: language.backgroundColor, color: language.color}}
      className={clsx("chip", index < props.wrongGuessCount && 'lost')}
    >
      {language.name}
    </span>
  ))

  return (
    <section className="language-chips">
      {languagesList}
    </section>
  )
}