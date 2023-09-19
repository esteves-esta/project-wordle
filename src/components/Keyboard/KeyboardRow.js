import React from 'react';

function KeyboardRow({ row, letterGuessed }) {

  function getStatus(letter) {
    if (letterGuessed.length === 0) {
      return 'keys'
    }
    const item = letterGuessed.find(item => item.letter === letter)

    return `keys ${item ? item.status : ''}`
  }

  return <div className="row">
    {row.map((letter) =>
      <span key={letter} className={getStatus(letter)}>{letter}</span>
    )}
  </div>;
}

export default KeyboardRow;
