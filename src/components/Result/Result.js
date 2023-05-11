import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Result({answer, currGuess, numGuesses}) {
  console.log(currGuess, numGuesses)

  // the user hasn't submitted any guesses
  if (!currGuess) {
    return
  }

  if (answer === currGuess.value) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong>
          Got it in
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    )
  }

  if (numGuesses >= NUM_OF_GUESSES_ALLOWED) {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }
}

export default Result;
