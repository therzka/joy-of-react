import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import GameInput from '../GameInput/GameInput';
import GuessResults from '../GuessResults/GuessResults';
import ResultBanner from '../ResultBanner/ResultBanner';


function Game() {
  const [gameInput, setGameInput] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [result, setResult] = React.useState(null)


  function handleRestart() {
    setAnswer(sample(WORDS))
    setGuesses([])
    setResult(null)
  }

  function handleGuess(guess) {
    if (gameInput.length !== WORD_LENGTH) {
      alert("Please enter a 5 letter word")
      setGameInput('')
      return
    }

    const nextGuesses = [...guesses, guess]

    // player lost the game
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGuesses([])
      setGameInput('')
      setResult("sad")
    }

    // player won the game
    if (guess === answer) {
      setResult("happy")
    }

    setGuesses(nextGuesses)
    setGameInput('')
  }

  return (
    <>
      {result ? <ResultBanner result={ result } tries={ guesses.length } answer={ answer } handleRestart={ handleRestart } /> : <></> }
      <GuessResults guesses={ guesses } answer={answer} result={result} /> 
      <GameInput gameInput={ gameInput } setGameInput={ setGameInput } handleGuess={ handleGuess } result={ result } />
      <button className="restart" onClick={ handleRestart }>Restart</button>
    </>
  )
}

export default Game;
