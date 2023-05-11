import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"

function Attempts({attempts, answer}) {
  const attemptsToRender = [...attempts];

  return (
  <div className="guess-results">
    {padAttempts(attemptsToRender).map(
      (attempt) => {
        const result = checkGuess(attempt.value, answer)

        const cells = (attempt.value === "")
          ? range(0,5).map(
            (_, idx)=>{
              return <span className="cell" key={`${attempt.key}-${idx}`}></span>
            })
          : attempt.value.split('').map(
            (letter, idx) => {
              const style = result[idx].status
              return <span className={`cell ${style}`} key={`${attempt.key}-${idx}`}>{letter}</span>
            })

        return (
          <p className="guess" key={attempt.key}>
            {cells}
          </p>)
      }
    )}
  </div>);
}

// given an array of attempts, push empty attempts until we reach the max allowed
export const padAttempts = (attempts) => {
  const result = [...attempts]

  while (result.length < NUM_OF_GUESSES_ALLOWED) {
    result.push(emptyAttempt())
  }
  return result
}

const emptyAttempt = () => ({key: crypto.randomUUID(), value: ""});
export const newAttempt = (guess) => {
  const attempt = emptyAttempt()
  attempt.value = guess;
  return attempt;
};


export default Attempts;
