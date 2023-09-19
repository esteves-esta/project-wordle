import React from 'react';

function ResultBanner({ success, answer, guessesQty }) {
  const className = success ? 'happy banner' : 'sad banner'
  return <div className={className}>
    {success && <p>
      <strong>Congratulations!</strong>
      {' '}Got it in{' '}
      <strong>{guessesQty} guesses</strong>.
    </p>}
    {!success && <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
  </div>;
}

export default ResultBanner;
