import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  function getClassName(index) {
    return value ? `cell ${result[index].status}` : 'cell'
  }

  function getLetter(index) {
    return value ? value[index] : null
  }

  return <>
    {range(5).map(index =>
      <span
        key={index}
        className={getClassName(index)}
      >
        {getLetter(index)}
      </span>
    )}
  </>;
}

export default Guess;
