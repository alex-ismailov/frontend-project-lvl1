import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const calc = (a, operator, b) => {
  switch (operator) {
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

const taskText = 'What is the result of the expression?';

const getGameData = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = getOperator();

  const question = `${firstNum} ${operator} ${secondNum}`;
  const rightAnswer = calc(firstNum, operator, secondNum);

  return [question, String(rightAnswer)];
};

const startBrainCalcGame = () => startGame(taskText, getGameData);

export default startBrainCalcGame;
