import {
  getUserAnswer, getRandomNumber, isRightAnswer, checkUserAnswer,
} from '../src/num-lib.js';

const calc = (a, opertor, b) => {
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

const getRightAnswer = (firstOperand, operator, secondOperand) => calc(firstOperand, operator, secondOperand);

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

/* ************************************** */
const brainCalcGame = (userName, amountOfRounds) => {
  let round = amountOfRounds;
  console.log('What is the result of the expression?');
  
  while (round !== 0) {
    const firstOperand = getRandomNumber();
    const secondOperand = getRandomNumber();
    const operator = getRandomOperator();
    const rightAnswer = getRightAnswer(firstOperand, operator, secondOperand);

    console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
    const answer = Number(getUserAnswer());
    
    if (checkUserAnswer(userName, answer, rightAnswer)) {
      round -= 1;
    } else {
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

// brainCalcGame('Alex', 3);
export default brainCalcGame;
