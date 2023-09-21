import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import GuessResults from '../GuessResults'
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [list, setList] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  const [letterGuessed, setLetterGuessed] = React.useState([])

  function addGuessToList(guess) {
    const nextList = [...list, guess]
    setList(nextList)

    if (guess === answer) {
      setGameStatus('won')
    } else if (nextList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }

    saveLettersGuessed(checkGuess(guess, answer))
  }

  function saveLettersGuessed(guessLetters) {
    const newGuesses = [...letterGuessed];
    guessLetters.forEach(item => {
      const index = newGuesses.findIndex(guessed => guessed.letter === item.letter);
      if (index < 0) {
        newGuesses.push({ ...item })
      } else if (item.status === 'correct') {
        newGuesses[index].status = item.status
      }
    })

    setLetterGuessed(newGuesses)
  }

  return (<>
    <GuessResults list={list} answer={answer} />

    <Input addGuessToList={addGuessToList} gameStatus={gameStatus} />

    <Keyboard letterGuessed={letterGuessed} />

    {gameStatus === 'won' && (
      <WonBanner numOfGuesses={list.length} />
    )}

    {gameStatus === 'lost' && (
      <LostBanner answer={answer} />
    )}
  </>);
}

export default Game;
