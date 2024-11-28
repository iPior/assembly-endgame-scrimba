import { clsx } from 'clsx';
import { getFarewellText } from "../data/utils"
import { languages } from "../data/languages"

export default function Status(props) {
  // const index = props.wrongGuessCount === 0 ? props.wrongGuessCount = 0 : props.wrongGuessCount - 1;
  const gameStatusClass = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameOver,
    farewell: !props.isGameOver && props.lastGuess
  })

  function renderGameStatus() {
        if (!props.isGameOver && props.lastGuess) {
            return (
            <p className="farewell-message">
              {getFarewellText(languages[props.wrongGuessCount - 1].name)}
            </p>
            )
        }

        if (props.isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } 
        if (props.isGameOver) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        
        return null
    }
  
  return (
      <section className={gameStatusClass}>
        {renderGameStatus()}
      </section> 
  )
}