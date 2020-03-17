import {
  getRandomNumber, isEven,
} from '../internal-lib.js';
import startGame from '../index.js';

const isEven = (n) => n % 2 === 0;

const getRightAnswer = (question) => (
  isEven(question)
    ? 'yes'
    : 'no'
);

/* ******************************* */
const getGameData = () => {
  const taskText = 'Answer "yes" if the number is even, otherwise answer "no"';
  const question = getRandomNumber();
  const rightAnswer = getRightAnswer(question);

  return [taskText, question, rightAnswer];
};

const startBrainEvenGame = () => startGame(getGameData);

export default startBrainEvenGame;
