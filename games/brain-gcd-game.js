import { getRandomNumber } from '../src/internal-lib.js';

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
const getBrainGCDGameData = () => {
  const taskText = 'Find the greatest common divisor of given numbers.';
  const question = `${getRandomNumber(20, 100)} ${getRandomNumber(20, 100)}`;
  const rightAnswer = getRightAnswer(question);

  return [taskText, question, rightAnswer];
};

export default getBrainGCDGameData;
