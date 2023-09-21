import React from 'react';

function ResultBanner({ gameStatus, answer, guessesQty }) {
  const className = gameStatus === 'won' ? 'happy banner' : 'sad banner'
  return <div className={className}>
    {gameStatus === 'won' && <p>
      <strong>Congratulations!</strong>
      {' '}Got it in{' '}
      <strong>
        {guessesQty === 1 ? '1 guess' : `${guessesQty} guesses`}
      </strong>.
    </p>}

    {gameStatus === 'lost' && (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    )}
  </div>;
}

export default ResultBanner;
