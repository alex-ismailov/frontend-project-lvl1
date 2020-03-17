const isRightAnswer = (guess, rightAnswer) => guess === rightAnswer;

const getTaskText = (gameData) => gameData[0];
const getQuestion = (gameData) => gameData[1];
const getRightAnswer = (gameData) => gameData[2];

const getRandomNumber = (min = 0, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  isRightAnswer, getTaskText, getQuestion,
  getRightAnswer, getRandomNumber,
};
