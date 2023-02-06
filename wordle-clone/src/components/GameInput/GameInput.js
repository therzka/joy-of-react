import React from "react";

function GameInput({ gameInput, setGameInput, handleGuess, result }) {
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault()
        handleGuess(gameInput)
      }}>
        <label htmlFor="guess-input">Enter Guess:  </label>
        <input
          type="text"
          id="guess-input"
          disabled={ result ? true : false }
          maxLength="5"
          value={ gameInput } 
          onChange={ (event) => setGameInput(event.target.value.toUpperCase()) } />
      </form>
      </div>
  )
}

export default GameInput;
