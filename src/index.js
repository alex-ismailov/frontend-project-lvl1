import readlineSync from 'readline-sync';
import {
  isRightAnswer, getTaskText, getQuestion, getRightAnswer,
} from './utils.js';

const ROUND = 3; // amount of rounds

const startGame = (getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let gameData = getGameData();
  console.log(getTaskText(gameData));

  for (let i = ROUND; i > 0; i -= 1) {
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
