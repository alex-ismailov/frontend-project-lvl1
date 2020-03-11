import {
  getUserName, getUserAnswer, checkUserAnswer,
  getTaskText, getQuestion, getRightAnswer,
} from './internal-lib.js';


const startGame = (getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();

  let gameData = getGameData();
  if (gameData.length === 0) {
    return false;
  }

  console.log(getTaskText(gameData));
  let round = 3;
  while (round !== 0) {
    console.log(getQuestion(gameData));
    const userAnswer = getUserAnswer();
    const rightAnswer = getRightAnswer(gameData);
    if (!checkUserAnswer(userName, userAnswer, rightAnswer)) {
      return false;
    }
    gameData = getGameData();
    round -= 1;
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default startGame;
