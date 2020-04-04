import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (a, operator, b) => {
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

const taskText = 'What is the result of the expression?';

const getGameData = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${firstNum} ${operator} ${secondNum}`;
  const rightAnswer = calculate(firstNum, operator, secondNum);

  return [question, String(rightAnswer)];
};

const startBrainCalcGame = () => startGame(taskText, getGameData);

export default startBrainCalcGame;
