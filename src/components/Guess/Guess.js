import React, {useState} from "react";

const Guess = () => {
  const [guess, setGuess] = useState("");

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    console.log(guess.toUpperCase())
    setGuess("")
  }

  const handleGuessInput = (event) => {
    setGuess(event.target.value)
  };

  return (
  <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess} onChange={handleGuessInput} minLength={5} maxLength={5}/>
  </form>);
}

export default Guess;
