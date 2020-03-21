const getQuestion = (gameData) => gameData[0];
const getRightAnswer = (gameData) => gameData[1];

const getRandomNumber = (min = 0, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  getQuestion, getRightAnswer, getRandomNumber,
};
