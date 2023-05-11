import React, {useState} from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const Input = ({submitGuess, numGuesses}) => {
  const [guess, setGuess] = useState("");

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    submitGuess(guess.toLocaleUpperCase())
    setGuess("")
  }

  const handleGuessInput = (event) => {
    const guess = event.target.value.replace(/\s/g,'')
    setGuess(guess)
  };

  return (
  <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      id="guess-input"
      type="text"
      value={guess}
      onChange={handleGuessInput}
      minLength={5}
      maxLength={5}
      disabled={numGuesses >= NUM_OF_GUESSES_ALLOWED}/>
  </form>);
}

export default Input;
