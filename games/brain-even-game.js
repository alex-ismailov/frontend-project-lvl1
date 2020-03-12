import {
  getRandomNumber, isEven, getGameData,
} from '../src/internal-lib.js';

const getTaskText = () => 'Answer "yes" if the number is even, otherwise answer "no"';
const getQuestion = () => getRandomNumber();
const getRightAnswer = (question) => (
  isEven(question)
    ? 'yes'
    : 'no'
);

/* ******************************* */
// const getBrainEvenGameData = () => {
//   const taskText = getTaskText();
//   const question = getQuestion();
//   const rightAnswer = getRightAnswer(question);

//   return [taskText, question, rightAnswer];
// };

const getBrainEvenGameData = () => {
  const taskText = getTaskText();
  const question = getQuestion();
  const rightAnswer = getRightAnswer(question);
  
  return getGameData(taskText, question, rightAnswer);
};

export default getBrainEvenGameData;
