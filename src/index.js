import readlineSync from 'readline-sync';
import {
  isRightAnswer, getTaskText, getQuestion, getRightAnswer,
} from './internal-lib.js';

const startGame = (getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (!getGameData) {
    return false;
  }

  let gameData = getGameData();
  console.log(getTaskText(gameData));

  for (let i = 3; i > 0; i -=1) {
    console.log(`Question: ${getQuestion(gameData)}`);
    const userAnswer = readlineSync.question('Answer: ');
    const rightAnswer = getRightAnswer(gameData);

    if (!isRightAnswer(userAnswer, rightAnswer)) {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`,
      );
      return false;
    }

    console.log('Correct!');
    gameData = getGameData();
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default startGame;
