import { languages } from "../data/languages"

export default function Language() {
  
  const languagesList = languages.map((language) => (
    <div 
      key={language.name} 
      style={{backgroundColor: language.backgroundColor, color: language.color}}
      className="chip"
    >
      {language.name}
    </div>
  ))

  return (
    <section className="language-chips">
      {languagesList}
    </section>
  )
}