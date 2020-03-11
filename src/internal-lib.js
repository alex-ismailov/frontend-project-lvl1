import readlineSync from 'readline-sync';

const getRandomNumber = (min = 0, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (n) => n % 2 === 0;

const getUserAnswer = () => readlineSync.question('Answer: ');

const isRightAnswer = (guess, rightAnswer) => guess === rightAnswer;

const askUserName = () => readlineSync.question('May I have your name? ');

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


export {
  getRandomNumber, isEven, getUserAnswer, isRightAnswer, askUserName, checkUserAnswer,
};
