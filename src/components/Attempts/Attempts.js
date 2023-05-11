import React from "react";
import { range } from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"

function Attempts({attempts}) {
  const attemptsToRender = [...attempts];

  return (
  <div className="guess-results">
    {padAttempts(attemptsToRender).map(
      (attempt)=>{

        const cells = (attempt.value === "")
          ? range(0,5).map((_, idx)=>(<span className="cell" key={`${attempt.key}-${idx}`}></span>))
          : attempt.value.split('').map((letter, idx)=>(<span className="cell" key={`${attempt.key}-${idx}`}>{letter}</span>))

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
