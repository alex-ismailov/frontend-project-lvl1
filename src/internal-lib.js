import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getRandomNumber = (min = 0, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (n) => n % 2 === 0;

const getUserAnswer = () => readlineSync.question('Answer: ');

const isRightAnswer = (guess, rightAnswer) => guess === rightAnswer;



const checkUserAnswer = (userName, userAnswer, rightAnswer) => {
  if (isRightAnswer(userAnswer, rightAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `"${userAnswer}" is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`,
  );
  return false;
};

const getTaskText = (gameData) => gameData[0];
const getQuestion = (gameData) => gameData[1];
const getRightAnswer = (gameData) => gameData[2];

export {
  getRandomNumber, isEven, getUserAnswer, isRightAnswer,
  getUserName, checkUserAnswer, getTaskText, getQuestion,
  getRightAnswer,
};
