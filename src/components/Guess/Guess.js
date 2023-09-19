import React from 'react';

import { range } from '../../utils';

function Guess({ item: { guess, status, id } }) {
  function getClassName(index) {
    return status.length > 0 ? status[index].status : ''
  }

  function getLetter(index) {
    return status.length > 0 ? status[index].letter : ''
  }

  return <>
    {range(0, 5).map(index =>
      <span
        key={`${id}${index}`}
        className={`cell ${getClassName(index)}`}
      >
        {getLetter(index)}
      </span>
    )}
  </>;
}

// className={`cell ${item.guess.status.length > 0 && item.guess.status[index]}`}
export default Guess;
