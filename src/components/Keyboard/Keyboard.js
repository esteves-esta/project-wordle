import React from 'react';
import KeyboardRow from './KeyboardRow';

function Keyboard({ letterGuessed }) {
  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',]
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  return <div>
    <KeyboardRow row={firstRow} letterGuessed={letterGuessed} />
    <KeyboardRow row={secondRow} letterGuessed={letterGuessed} />
    <KeyboardRow row={thirdRow} letterGuessed={letterGuessed}  />
  </div >;
}

export default Keyboard;
