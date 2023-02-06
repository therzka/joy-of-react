import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults ({ guesses, answer, setResult }) {

  return (
    <div className="guess-results">
      { range(NUM_OF_GUESSES_ALLOWED).map((guessRow) => {
        return <Guess guessRow={ guessRow } guess={ guesses[guessRow] } answer={answer} setResult={setResult} />
      })
      }
    </div>
  )
}

export default GuessResults;
