import React from 'react';

function Input({ addGuessToList, reachedEnd }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setGuess('')
    addGuessToList(guess.toUpperCase())
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        disabled={reachedEnd}
      />
    </form>
  );
}

export default Input;
