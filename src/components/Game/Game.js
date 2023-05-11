import React, {useState} from 'react';

import Attempts, { newAttempt, padAttempts } from '../Attempts'
import Input from '../Input'
import Result from '../Result'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {

  // a guess is a user input
  const [numGuesses, setNumGuesses] = useState(0);

  // an attempt includes guesses and placeholders for future guesses
  const [attempts, setAttempts] = useState(padAttempts([]));

  const submitGuess = (guess) => {
    if (numGuesses >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    // repace an empty attempt with latest user attempt
    const newAttempts = [...attempts]
    newAttempts[numGuesses] = newAttempt(guess)

    setAttempts(newAttempts)
    setNumGuesses(numGuesses+1)
  }

  return <>
    <Attempts attempts={attempts} answer={answer}/>
    <Input submitGuess={submitGuess} numGuesses={numGuesses} />
    <Result answer={answer} currGuess={attempts[numGuesses-1]} numGuesses={numGuesses} />
  </>;
}

export default Game;
