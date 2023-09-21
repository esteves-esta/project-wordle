import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import GuessResults from '../GuessResults'
import { checkGuess } from '../../game-helpers';
import ResultBanner from '../ResultBanner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [list, setList] = React.useState([])
  const [success, setSuccess] = React.useState(false)
  const [reachedEnd, setReachedEnd] = React.useState(false)
  const [qtyOfGuessesMade, setQtyOfGuessesMade] = React.useState(0)
  const [letterGuessed, setLetterGuessed] = React.useState([])

  function addGuessToList(guess) {
    setList([...list, guess])

    saveLettersGuessed(checkGuess(guess, answer))
    checkIfGameEnded(guess)
  }

  function saveLettersGuessed(guessLetters) {
    const newGuesses = [...letterGuessed];
    guessLetters.forEach(item => {
      const index = newGuesses.findIndex(guessed => guessed.letter === item.letter);
      if (index < 0) {
        newGuesses.push({...item})
      } else if (item.status === 'correct') {
        newGuesses[index].status = item.status
      }
    })

    setLetterGuessed(newGuesses)
  }

  function checkIfGameEnded(guess) {
    setSuccess(answer === guess)
    setReachedEnd(qtyOfGuessesMade === NUM_OF_GUESSES_ALLOWED)
    setQtyOfGuessesMade(qtyOfGuessesMade + 1)

  }

  return (<>
    <GuessResults list={list} answer={answer} />

    <Input addGuessToList={addGuessToList} reachedEnd={success || reachedEnd} />

    <Keyboard letterGuessed={letterGuessed} />

    {(success || reachedEnd) && <ResultBanner success={success} answer={answer} guessesQty={qtyOfGuessesMade} />}
  </>);
}

export default Game;
