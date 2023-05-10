import React, {useState} from "react";

const Guess = ({submitGuess}) => {
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
    <input id="guess-input" type="text" value={guess} onChange={handleGuessInput} minLength={5} maxLength={5}/>
  </form>);
}

export default Guess;
