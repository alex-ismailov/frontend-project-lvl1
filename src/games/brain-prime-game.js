import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const isDivides = (n, div) => n % div === 0;

const next = (n) => (
  n === 2
    ? 3
    : n + 2
);

const smallestDivisor = (n) => {
  const iter = (testDivisor) => {
    if (testDivisor ** 2 > n) {
      return n;
    }
    return isDivides(n, testDivisor)
      ? testDivisor
      : iter(next(testDivisor));
  };
  return iter(2);
};

const isPrime = (n) => n === smallestDivisor(n);

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
