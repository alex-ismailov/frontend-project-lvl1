import {
  getRandomNumber, isEven,
} from '../src/internal-lib.js';

const getRightAnswer = (question) => (
  isEven(question)
    ? 'yes'
    : 'no'
);

/* ******************************* */
const getBrainEvenGameData = () => {
  const taskText = 'Answer "yes" if the number is even, otherwise answer "no"';
  const question = getRandomNumber();
  const rightAnswer = getRightAnswer(question);
  
  return [taskText, question, rightAnswer];
};

export default getBrainEvenGameData;
