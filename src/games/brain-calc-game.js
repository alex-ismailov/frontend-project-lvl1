import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

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

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);

  return operators[randomIndex];
};

const getOperand = () => getRandomNumber();

const getRightAnswer = (expr) => {
  const splittedExpr = expr.split(' ');
  const [firstOperand, operator, secondOperator] = splittedExpr;
  const rightAnswer = calc(firstOperand, operator, secondOperator);

  return String(rightAnswer);
};

/* ************************************** */
const getGameData = () => {
  const taskText = 'What is the result of the expression?';
  const question = `${getOperand()} ${getOperator()} ${getOperand()}`;
  const rightAnswer = getRightAnswer(question);

  return [taskText, question, rightAnswer];
};

const startBrainCalcGame = () => startGame(getGameData);

export default startBrainCalcGame;
