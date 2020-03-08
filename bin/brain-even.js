#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/index.js'

const getRandomNumber = () => {
  const MAX = 20;
  return Math.floor(Math.random() * (MAX + 1));
};
const isEven = (n) => n % 2 === 0;

const isRightAnswer = (guess, currQuestNumber) => {
  switch(guess) {
    case 'yes':
      return isEven(currQuestNumber) === true;
    case 'no':
      return isEven(currQuestNumber) === false;
    default:
      return null;
  }
};

/* *********************************************** */

const userName = greeting();

const brainEvenGame = (userName, amountOfRounds) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no"`);
  while(amountOfRounds !== 0) {
    const currQuestNumber = getRandomNumber();
    console.log(`Question: ${currQuestNumber}`);
    const answer = readlineSync.question('Answer: ');

    if (isRightAnswer(answer, currQuestNumber)) {
      console.log('Correct!');
      amountOfRounds -= 1;
    } else {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

/* testing */
brainEvenGame(userName, 3);
