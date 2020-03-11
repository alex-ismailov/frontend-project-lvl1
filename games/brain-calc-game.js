import { getRandomNumber } from '../src/internal-lib.js';

const calc = (first, opertor, second) => {
  const a = new Number(first);
  const b = new Number(second);
  switch (opertor) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const getTaskText = () => 'What is the result of the expression?';

const firstOperand = () => getRandomNumber();
const secondOperand = () => getRandomNumber();
const operator = () => getRandomOperator();

const getQuestion = () => (
  `${firstOperand()} ${operator()} ${secondOperand()}`
);

const getRightAnswer = (expr) => {
  const splittedExpr = expr.split(' ');
  const [firstOperand, operator, secondOperand] = splittedExpr;
  const rightAnswer = calc(firstOperand, operator, secondOperand);
  return String(rightAnswer);
};


/* ************************************** */
const brainCalcGame = (msg, question) => {
  switch (msg) {
    case 'getTaskText':
      return getTaskText();
    case 'getQuestion':
      return getQuestion();
    case 'getRightAnswer':
      return getRightAnswer(question);
    // case 'isRightAnswer':
    //   return isRightAnswer(answer, question);
    default:
      null;
  }
};




// const brainCalcGame = (msg, answer, question) => {
//   return gameData[текстЗадания, вопрос, правильныйОтвет];
// };

export default brainCalcGame;
