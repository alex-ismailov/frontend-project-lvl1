import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const isEven = (n) => n % 2 === 0;

const taskText = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [String(question), rightAnswer];
};

const startBrainEvenGame = () => startGame(taskText, getGameData);

export default startBrainEvenGame;
