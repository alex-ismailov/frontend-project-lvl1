import { getRandomNumber } from '../internal-lib.js';
import startGame from '../index.js';

const gcd = (a, b) => (
  b === 0
    ? a
    : gcd(b, a % b)
);

const getRightAnswer = (question) => {
  const splitedQuestion = question.split(' ');
  const [firstNum, secondNum] = splitedQuestion;

  return String(gcd(firstNum, secondNum));
};

/* ******************************* */
const getGameData = () => {
  const taskText = 'Find the greatest common divisor of given numbers.';
  const question = `${getRandomNumber(20, 100)} ${getRandomNumber(20, 100)}`;
  const rightAnswer = getRightAnswer(question);

  return [taskText, question, rightAnswer];
};

const startBrainGCDGame = () => startGame(getGameData);

export default startBrainGCDGame;
