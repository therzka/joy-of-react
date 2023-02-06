import React from "react";

function ResultBanner ({ result, answer = "", tries = 6, handleRestart }) {
  if (result) {
    return (
      <div className={ `${ result } banner` } >
        {
          result === "happy" ?
            <p><strong>Congratulations!</strong> Got it in <strong>{ tries } guesses!</strong></p> :
            <p>Sorry, the correct answer is <strong>{ answer.toUpperCase() }</strong>.</p>
        }
         <button onClick={ handleRestart }>Restart</button>
      </div>
    )
  }
}

export default ResultBanner;
