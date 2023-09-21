import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessesList({ list, answer }) {
  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((index) =>
      <p key={index} className="guess">
        <Guess value={list[index]} answer={answer} />
      </p>
    )}
  </div>;
}

export default GuessesList;
