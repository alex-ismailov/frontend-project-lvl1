import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const isEven = (n) => n % 2 === 0;

const getRightAnswer = (question) => (
  isEven(question)
    ? 'yes'
    : 'no'
);

const taskText = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const question = getRandomNumber();
  const rightAnswer = getRightAnswer(question);

  return [String(question), rightAnswer];
};

const startBrainEvenGame = () => startGame(taskText, getGameData);

export default startBrainEvenGame;
