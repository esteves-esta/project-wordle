import React from 'react';

function KeyboardRow({ row, statusByLetter }) {
  return <>
    {row.map((letter) =>
      <span key={letter} className={`keys ${statusByLetter[letter] || ''}`}>{letter}</span>
    )}
  </>;
}

export default KeyboardRow;
