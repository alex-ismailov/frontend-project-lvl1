import readlineSync from 'readline-sync';
import {
  getQuestion, getRightAnswer,
} from './utils.js';

const NUM_OF_ROUNDS = 3; // amount of NUM_OF_ROUNDSs

const startGame = (taskText, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let gameData = getGameData();
  console.log(taskText);

  for (let i = NUM_OF_ROUNDS; i > 0; i -= 1) {
    console.log(`Question: ${getQuestion(gameData)}`);
    const userAnswer = readlineSync.question('Answer: ');
    const rightAnswer = getRightAnswer(gameData);

    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    gameData = getGameData();
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
