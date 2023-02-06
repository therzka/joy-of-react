import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';


function Guess ({ guessRow, guess, answer }) {
  function resultRows (guess) {
    if (!guess) {
      return range(WORD_LENGTH).map((index) => <span key={ index } className="cell"></span>)
    }

    const result = checkGuess(guess, answer)
    
    const spans = result.map(({letter, status}, index) => {
        return <span key={ `${letter}${index}` } className={`cell ${status}`}>{ letter }</span>
    })
    return spans
  }
  
  return (
    <p key={ guessRow } className="guess">
      { resultRows(guess) }
    </p>
  )
}

export default Guess;
