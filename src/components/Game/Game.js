import React, {useState} from 'react';

import Attempts from '../Attempts'
import Guess from '../Guess'
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {

  const [attempts, setAttempts] = useState([]);

  const submitGuess = (guess) => {
    const newAttempts = [...attempts]
    newAttempts.push({id: crypto.randomUUID(), value: guess})
    setAttempts(newAttempts)
  }

  return <>
    <Attempts attempts={attempts}/>
    <Guess submitGuess={submitGuess} />
  </>;
}

export default Game;
