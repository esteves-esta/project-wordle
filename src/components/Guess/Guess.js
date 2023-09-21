import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell'

  return <span className={className}>{letter}</span>
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return <>
    {range(5).map(index =>
      <Cell
        key={index}
        letter={result ? result[index].letter : undefined}
        status={result ? result[index].status : undefined}
      />
    )}
  </>;
}

export default Guess;
