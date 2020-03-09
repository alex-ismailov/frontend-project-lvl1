import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const MAX = 20;
  return Math.floor(Math.random() * (MAX)) + 1;
};

const isEven = (n) => n % 2 === 0;

const getRightAnswer = (questNumber) => (
  isEven(questNumber)
    ? 'yes'
    : 'no'
);

const isRightAnswer = (guess, currQuestNumber) => guess === getRightAnswer(currQuestNumber);

/* ************************************** */

const brainEvenGame = (userName, amountOfRounds) => {
  let round = amountOfRounds;
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'');
  while (round !== 0) {
    const currQuestNumber = getRandomNumber();
    console.log(`Question: ${currQuestNumber}`);
    const answer = readlineSync.question('Answer: ');
    if (isRightAnswer(answer, currQuestNumber)) {
      console.log('Correct!');
      round -= 1;
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was '${getRightAnswer(currQuestNumber)}'.\nLet's try again, ${userName}!`,
      );
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default brainEvenGame;
