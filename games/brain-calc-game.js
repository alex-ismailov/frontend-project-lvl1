import {
  getRandomNumber, getGameData,
} from '../src/internal-lib.js';

const calc = (first, opertor, second) => {
  const a = Number(first);
  const b = Number(second);
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

const getFirstOperand = () => getRandomNumber();
const getSecondOperand = () => getRandomNumber();
const getOperator = () => getRandomOperator();

const getQuestion = () => (
  `${getFirstOperand()} ${getOperator()} ${getSecondOperand()}`
);

const getRightAnswer = (expr) => {
  const splittedExpr = expr.split(' ');
  const [firstOperand, operator, secondOperator] = splittedExpr;
  const rightAnswer = calc(firstOperand, operator, secondOperator);

  return String(rightAnswer);
};

/* ************************************** */
const getBrainCalcGameData = () => {
  const taskText = getTaskText();
  const question = getQuestion();
  const rightAnswer = getRightAnswer(question);
  
  return getGameData(taskText, question, rightAnswer);
};

export default getBrainCalcGameData;
