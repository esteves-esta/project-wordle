import React from 'react';
import Guess from '../Guess';

function GuessesList({ list }) {
  return <div className="guess-results">
    {list.map((item) =>
      <p key={item.id} className="guess">
        <Guess item={item} />
      </p>
    )}
  </div>;
}

export default GuessesList;
