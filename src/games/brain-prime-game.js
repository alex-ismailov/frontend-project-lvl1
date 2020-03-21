import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i ** 2 <= n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getRightAnswer = (question) => (
  isPrime(question)
    ? 'yes'
    : 'no'
);

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNumber(2, 100);
  const rightAnswer = getRightAnswer(question);

  return [question, rightAnswer];
};

const startBrainPrimeGame = () => startGame(taskText, getGameData);

export default startBrainPrimeGame;
